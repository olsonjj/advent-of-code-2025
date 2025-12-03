import { describe, it, expect } from 'vitest'
import { solvePart1, solvePart2 } from './solve'

describe('Day 3: Battery Joltage Calculator', () => {
  const exampleInput = `987654321111111
811111111111119
234234234234278
818181911112111`

  describe('Part 1', () => {
    it('should find max joltage for first bank (987654321111111 -> 98)', () => {
      const result = solvePart1('987654321111111')
      expect(result).toBe(98)
    })

    it('should find max joltage for second bank (811111111111119 -> 89)', () => {
      const result = solvePart1('811111111111119')
      expect(result).toBe(89)
    })

    it('should find max joltage for third bank (234234234234278 -> 78)', () => {
      const result = solvePart1('234234234234278')
      expect(result).toBe(78)
    })

    it('should find max joltage for fourth bank (818181911112111 -> 92)', () => {
      const result = solvePart1('818181911112111')
      expect(result).toBe(92)
    })

    it('should calculate total joltage from example (98 + 89 + 78 + 92 = 357)', () => {
      const result = solvePart1(exampleInput)
      expect(result).toBe(357)
    })

    it('should handle single line input', () => {
      const result = solvePart1('123')
      expect(result).toBe(23) // max pair is 2 and 3
    })

    it('should handle input with trailing newlines', () => {
      const result = solvePart1('987654321111111\n')
      expect(result).toBe(98)
    })
  })

  describe('Part 2', () => {
    it('should find max 12-digit joltage for first bank (987654321111111 -> 987654321111)', () => {
      const result = solvePart2('987654321111111')
      expect(result).toBe(987654321111)
    })

    it('should find max 12-digit joltage for second bank (811111111111119 -> 811111111119)', () => {
      const result = solvePart2('811111111111119')
      expect(result).toBe(811111111119)
    })

    it('should find max 12-digit joltage for third bank (234234234234278 -> 434234234278)', () => {
      const result = solvePart2('234234234234278')
      expect(result).toBe(434234234278)
    })

    it('should find max 12-digit joltage for fourth bank (818181911112111 -> 888911112111)', () => {
      const result = solvePart2('818181911112111')
      expect(result).toBe(888911112111)
    })

    it('should calculate total joltage from example (3121910778619)', () => {
      const result = solvePart2(exampleInput)
      expect(result).toBe(3121910778619)
    })
  })
})
