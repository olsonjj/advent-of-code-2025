import { describe, it, expect } from 'vitest'
import { solveDay4 } from './solve'

describe('Day 4: Forklift Paper Roll Access', () => {
  const exampleInput = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`

  it('should count accessible paper rolls correctly for part 1', () => {
    const result = solveDay4(exampleInput)
    expect(result.part1).toBe(13)
  })

  it('should count total removable paper rolls correctly for part 2', () => {
    const result = solveDay4(exampleInput)
    expect(result.part2).toBe(43)
  })
})
