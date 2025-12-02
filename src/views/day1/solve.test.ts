import { describe, it, expect } from 'vitest'
import { solveDay1 } from './solve'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

describe('solveDay1', () => {
  it('should solve with simple test input', () => {
    const input = `R10
L5
R15`
    
    const result = solveDay1(input)
    
    // Starting at 50
    // R10 -> 60
    // L5 -> 55
    // R15 -> 70
    // Part 1: never lands on 0
    // Part 2: never passes through 0
    expect(result.part1).toBe(0)
    expect(result.part2).toBe(0)
  })

  it('should count when landing on 0', () => {
    const input = `R50
L50`
    
    const result = solveDay1(input)
    
    // Starting at 50
    // R50 -> 0 (lands on 0) - passes through 99, 98, ..., 1, 0
    // L50 -> 50
    // Part 1: lands on 0 once
    // Part 2: passes through 0 once (when reaching it)
    expect(result.part1).toBe(1)
    expect(result.part2).toBe(1)
  })

  it('should count all passes through 0', () => {
    const input = `R60
L10`
    
    const result = solveDay1(input)
    
    // Starting at 50
    // R60 -> 10 (passes through 0 at position 0, then continues to 1, 2, ..., 10)
    // L10 -> 0 (passes through 0 at final position)
    // Part 1: lands on 0 once (after second rotation)
    // Part 2: passes through 0 twice (once during R60, once at end of L10)
    expect(result.part1).toBe(1)
    expect(result.part2).toBe(2)
  })

  it('should solve with actual puzzle input', () => {
    const inputPath = join(__dirname, '../../../public/Day1Input.txt')
    const input = readFileSync(inputPath, 'utf-8')
    
    const result = solveDay1(input)
    
    // Expected answers based on the actual puzzle
    expect(result.part1).toBe(1052)
    expect(result.part2).toBe(6295)
  })
})
