import { describe, it, expect } from 'vitest'
import { solveDay5 } from './solve'

describe('Day 5: Fresh Ingredient Checker', () => {
  const exampleInput = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`

  it('should count fresh ingredients correctly for part 1', () => {
    const result = solveDay5(exampleInput)
    expect(result.part1).toBe(3)
  })

  it('should count total fresh IDs in all ranges for part 2', () => {
    const result = solveDay5(exampleInput)
    // Ranges 3-5, 10-14, 16-20, 12-18
    // After merging: 3-5 (3 IDs), 10-20 (11 IDs) = 14 total
    expect(result.part2).toBe(14)
  })
})
