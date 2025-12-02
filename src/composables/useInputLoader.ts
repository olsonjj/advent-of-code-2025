import { ref, onMounted } from 'vue'

/**
 * Composable to load input files for Advent of Code challenges
 * @param filename - The filename to load from the public directory
 * @returns An object with the input ref and loading/error states
 */
export function useInputLoader(filename: string) {
  const input = ref('')
  const loading = ref(false)
  const error = ref<string | null>(null)

  const loadInput = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await fetch(`/${filename}`)
      
      if (!response.ok) {
        throw new Error(`Failed to load ${filename}: ${response.statusText}`)
      }
      
      const text = await response.text()
      input.value = text
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error occurred'
    } finally {
      loading.value = false
    }
  }

  // Automatically load the file when the component mounts
  onMounted(loadInput)

  return {
    input,
    loading,
    error,
    loadInput // Expose in case manual reload is needed
  }
}
