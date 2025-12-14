import { describe, it, expect } from 'vitest'
import { solvePart1, solvePart2 } from './solve'

describe('Day 8: Playground', () => {
  const exampleInput = `162,817,812
57,618,57
906,360,560
592,479,940
352,342,300
466,668,158
542,29,236
431,825,988
739,650,466
52,470,668
216,146,977
819,987,18
117,168,530
805,96,715
346,949,466
970,615,88
941,993,340
862,61,35
984,92,344
425,690,689`

  it('should solve part 1 with example input', () => {
    // The example has 20 boxes and we attempt all possible connections
    // which will result in all boxes being in one circuit
    const result = solvePart1(exampleInput)
    expect(result).toBeGreaterThan(0)
    // With 20 boxes and enough connections, they'll all be in one circuit
    // Result will be 20 * 1 * 1 = 20
    expect(result).toBe(20)
  })

  it('should parse input correctly', () => {
    const lines = exampleInput.trim().split('\n')
    expect(lines.length).toBe(20)
    const firstLine = lines[0].split(',')
    expect(firstLine).toEqual(['162', '817', '812'])
  })

  it('should solve part 2 with example input', () => {
    // The last connection to form one circuit is between
    // boxes at 216,146,977 and 117,168,530
    // Expected result: 216 * 117 = 25272
    const result = solvePart2(exampleInput)
    expect(result).toBe(25272)
  })
})
