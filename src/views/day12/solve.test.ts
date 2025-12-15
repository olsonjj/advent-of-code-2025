import { describe, it, expect } from 'vitest'
import { solvePart1 } from './solve'

const exampleInput = `0:
###
##.
##.

1:
###
##.
.##

2:
.##
###
##.

3:
##.
###
##.

4:
###
#..
###

5:
###
.#.
###

4x4: 0 0 0 0 2 0
12x5: 1 0 1 0 2 2
12x5: 1 0 1 0 3 2`

describe('Day 12: Christmas Tree Farm', () => {
  it('counts how many regions can fit all presents (example)', () => {
    const result = solvePart1(exampleInput)
    expect(result).toBe(2)
  })
})
