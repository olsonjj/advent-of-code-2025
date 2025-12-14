import { describe, it, expect } from 'vitest'
import { solvePart1, solvePart2 } from './solve'

const exampleInput = `7,1
11,1
11,7
9,7
9,5
2,5
2,3
7,3`

describe('Day 9: Movie Theater', () => {
  describe('Part 1', () => {
    it('should find the largest rectangle area in example', () => {
      expect(solvePart1(exampleInput)).toBe(50)
    })
  })

  describe('Part 2', () => {
    it('should find largest rectangle using only red/green tiles', () => {
      expect(solvePart2(exampleInput)).toBe(24)
    })
  })
})
