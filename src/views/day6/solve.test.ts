import { describe, it, expect } from 'vitest'
import { solveDay6 } from './solve'

describe('Day 6: Cephalopod Math Worksheet', () => {
  const exampleInput = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `

  it('should calculate grand total correctly for part 1', () => {
    const result = solveDay6(exampleInput)
    // 123 * 45 * 6 = 33210
    // 328 + 64 + 98 = 490
    // 51 * 387 * 215 = 4243455
    // 64 + 23 + 314 = 401
    // Grand total = 33210 + 490 + 4243455 + 401 = 4277556
    expect(result.part1).toBe(4277556)
  })

  it('should calculate grand total correctly for part 2 (cephalopod math)', () => {
    const result = solveDay6(exampleInput)
    // Reading right-to-left:
    // 4 + 431 + 623 = 1058
    // 175 * 581 * 32 = 3253600
    // 8 + 248 + 369 = 625
    // 356 * 24 * 1 = 8544
    // Grand total = 1058 + 3253600 + 625 + 8544 = 3263827
    expect(result.part2).toBe(3263827)
  })
})
