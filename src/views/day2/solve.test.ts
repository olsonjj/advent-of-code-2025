import { describe, it, expect } from 'vitest'
import { solveDay2 } from './solve'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

describe('solveDay2', () => {
  it('should identify numbers repeated exactly twice (part 1)', () => {
    const input = '11-200'
    
    const result = solveDay2(input)
    
    // In range 11-200, numbers repeated exactly twice:
    // 11 (1 repeated), 22, 33, 44, 55, 66, 77, 88, 99 (2-digit)
    // Sum = 11 + 22 + 33 + 44 + 55 + 66 + 77 + 88 + 99 = 495
    expect(result.part1).toBe(495)
  })

  it('should identify numbers repeated at least twice (part 2)', () => {
    const input = '11-12'
    
    const result = solveDay2(input)
    
    // In range 11-12:
    // 11 = "1" repeated 2 times (valid for part 2)
    // 12 = not a repetition
    // Part 2 sum = 11
    expect(result.part2).toBe(11)
  })

  it('should handle 3-repetition patterns', () => {
    const input = '111-111'
    
    const result = solveDay2(input)
    
    // 111 = "1" repeated 3 times
    // Part 1: not exactly 2 repetitions, so 0
    // Part 2: at least 2 repetitions, so 111
    expect(result.part1).toBe(0)
    expect(result.part2).toBe(111)
  })

  it('should handle 4-digit patterns repeated twice', () => {
    const input = '1234-12341235'
    
    const result = solveDay2(input)
    
    // 12341234 = "1234" repeated exactly 2 times
    expect(result.part1).toBeGreaterThanOrEqual(12341234)
    expect(result.part2).toBeGreaterThanOrEqual(12341234)
  })

  it('should handle multiple ranges', () => {
    const input = '11-12,22-23'
    
    const result = solveDay2(input)
    
    // Range 11-12: 11 is valid (1 repeated)
    // Range 22-23: 22 is valid (2 repeated)
    // Part 2 sum = 11 + 22 = 33
    expect(result.part2).toBe(33)
  })

  it('should solve with actual puzzle input', () => {
    const inputPath = join(__dirname, '../../../public/Day2Input.txt')
    const input = readFileSync(inputPath, 'utf-8')
    
    const result = solveDay2(input)
    
    // Expected answers based on the actual puzzle
    expect(result.part1).toBe(24747430309)
    expect(result.part2).toBe(30962646823)
  })
})
