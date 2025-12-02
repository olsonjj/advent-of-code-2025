import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useInputLoader } from './useInputLoader'
import { defineComponent, h } from 'vue'
import { mount } from '@vue/test-utils'

// Mock the fetch API
const mockFetch = vi.fn()
global.fetch = mockFetch

// Helper function to mount the composable in a test component
function mountComposable(filename: string) {
  let result: any
  
  const TestComponent = defineComponent({
    setup() {
      result = useInputLoader(filename)
      return () => h('div')
    }
  })
  
  const wrapper = mount(TestComponent)
  
  return { result, wrapper }
}

describe('useInputLoader', () => {
  beforeEach(() => {
    mockFetch.mockClear()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should initialize with empty input', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      text: async () => 'data'
    })

    const { result } = mountComposable('test.txt')
    
    expect(result.input.value).toBe('')
    expect(result.error.value).toBe(null)
    
    // Wait for async operation to complete
    await vi.waitFor(() => expect(result.loading.value).toBe(false))
  })

  it('should load input file successfully', async () => {
    const mockText = 'test input data'
    mockFetch.mockResolvedValueOnce({
      ok: true,
      text: async () => mockText
    })

    const { result } = mountComposable('test.txt')
    
    await vi.waitFor(() => expect(result.loading.value).toBe(false))

    expect(mockFetch).toHaveBeenCalledWith('/test.txt')
    expect(result.input.value).toBe(mockText)
    expect(result.error.value).toBe(null)
  })

  it('should set loading state during fetch', async () => {
    let resolvePromise: any
    mockFetch.mockImplementation(() => 
      new Promise(resolve => {
        resolvePromise = () => resolve({
          ok: true,
          text: async () => 'data'
        })
      })
    )

    const { result } = mountComposable('test.txt')
    
    await vi.waitFor(() => expect(result.loading.value).toBe(true))
    
    resolvePromise()
    await vi.waitFor(() => expect(result.loading.value).toBe(false))
  })

  it('should handle fetch errors with non-ok response', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Not Found'
    })

    const { result } = mountComposable('missing.txt')
    
    await vi.waitFor(() => expect(result.error.value).not.toBe(null))

    expect(result.error.value).toContain('Failed to load missing.txt')
    expect(result.error.value).toContain('Not Found')
    expect(result.input.value).toBe('')
  })

  it('should handle network errors', async () => {
    const networkError = new Error('Network failure')
    mockFetch.mockRejectedValueOnce(networkError)

    const { result } = mountComposable('test.txt')
    
    await vi.waitFor(() => expect(result.error.value).not.toBe(null))

    expect(result.error.value).toBe('Network failure')
  })

  it('should handle non-Error exceptions', async () => {
    mockFetch.mockRejectedValueOnce('String error')

    const { result } = mountComposable('test.txt')
    
    await vi.waitFor(() => expect(result.error.value).not.toBe(null))

    expect(result.error.value).toBe('Unknown error occurred')
  })

  it('should allow manual reload via loadInput', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      text: async () => 'first load'
    })

    const { result } = mountComposable('test.txt')
    
    await vi.waitFor(() => expect(result.input.value).toBe('first load'))

    // Manual reload
    mockFetch.mockResolvedValueOnce({
      ok: true,
      text: async () => 'second load'
    })

    await result.loadInput()
    
    expect(result.input.value).toBe('second load')
    expect(mockFetch).toHaveBeenCalledTimes(2)
  })

  it('should reset error state on successful reload', async () => {
    // First load fails
    mockFetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Error'
    })

    const { result } = mountComposable('test.txt')
    
    await vi.waitFor(() => expect(result.error.value).not.toBe(null))

    // Second load succeeds
    mockFetch.mockResolvedValueOnce({
      ok: true,
      text: async () => 'success'
    })

    await result.loadInput()
    
    expect(result.error.value).toBe(null)
  })
})
