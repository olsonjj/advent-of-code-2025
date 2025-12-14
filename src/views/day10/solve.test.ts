import { describe, it, expect } from 'vitest'
import { solvePart1, solvePart2 } from './solve'

const exampleInput = `[.##.] (3) (1,3) (2) (2,3) (0,2) (0,1) {3,5,4,7}
[...#.] (0,2,3,4) (2,3) (0,4) (0,1,2) (1,2,3,4) {7,5,12,7,2}
[.###.#] (0,1,2,3,4) (0,3,4) (0,1,2,4,5) (1,2) {10,11,11,5,10,5}`

describe('Day 10: Factory', () => {
  describe('Part 1', () => {
    it('solves the first example machine', () => {
      const input = '[.##.] (3) (1,3) (2) (2,3) (0,2) (0,1) {3,5,4,7}'
      const result = solvePart1(input)
      expect(result).toBe(2)
    })

    it('solves the second example machine', () => {
      const input = '[...#.] (0,2,3,4) (2,3) (0,4) (0,1,2) (1,2,3,4) {7,5,12,7,2}'
      const result = solvePart1(input)
      expect(result).toBe(3)
    })

    it('solves the third example machine', () => {
      const input = '[.###.#] (0,1,2,3,4) (0,3,4) (0,1,2,4,5) (1,2) {10,11,11,5,10,5}'
      const result = solvePart1(input)
      expect(result).toBe(2)
    })

    it('solves all three example machines', () => {
      const result = solvePart1(exampleInput)
      expect(result).toBe(7)
    })
  })

  describe('Part 2', () => {
    it('solves the first example machine', () => {
      const input = '[.##.] (3) (1,3) (2) (2,3) (0,2) (0,1) {3,5,4,7}'
      const result = solvePart2(input)
      expect(result).toBe(10)
    })

    it('solves the second example machine', () => {
      const input = '[...#.] (0,2,3,4) (2,3) (0,4) (0,1,2) (1,2,3,4) {7,5,12,7,2}'
      const result = solvePart2(input)
      expect(result).toBe(12)
    })

    it('solves the third example machine', () => {
      const input = '[.###.#] (0,1,2,3,4) (0,3,4) (0,1,2,4,5) (1,2) {10,11,11,5,10,5}'
      const result = solvePart2(input)
      expect(result).toBe(11)
    })

    it('solves all three example machines', () => {
      const result = solvePart2(exampleInput)
      expect(result).toBe(33)
    })
  })
})
