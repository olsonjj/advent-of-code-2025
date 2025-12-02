/**
 * Solve Day 2: Invalid Product IDs
 * 
 * @param input - The puzzle input as a string (comma-separated ranges)
 * @returns An object with part1 and part2 answers
 */
export function solveDay2(input: string): { part1: number; part2: number } {
  const ranges = input.trim().split(',').filter(r => r.trim())
  let part1Sum = 0
  let part2Sum = 0
  
  for (const range of ranges) {
    const [start, end] = range.trim().split('-').map(Number)
    
    for (let id = start; id <= end; id++) {
      if (isInvalidIDPart1(id)) {
        part1Sum += id
      }
      if (isInvalidIDPart2(id)) {
        part2Sum += id
      }
    }
  }
  
  return {
    part1: part1Sum,
    part2: part2Sum
  }
}

/**
 * Part 1: Check if a number is made of a sequence repeated exactly twice
 * (e.g., 55, 6464, 123123)
 */
function isInvalidIDPart1(num: number): boolean {
  const str = num.toString()
  const len = str.length
  
  // Must be even length to be repeatable
  if (len % 2 !== 0) return false
  
  // Check if first half equals second half
  const halfLen = len / 2
  const firstHalf = str.substring(0, halfLen)
  const secondHalf = str.substring(halfLen)
  
  return firstHalf === secondHalf
}

/**
 * Part 2: Check if a number is made of a sequence repeated at least twice
 * (e.g., 111, 12341234, 565656)
 */
function isInvalidIDPart2(num: number): boolean {
  const str = num.toString()
  const len = str.length
  
  // Try each possible pattern length (from 1 to len/2)
  for (let patternLen = 1; patternLen <= Math.floor(len / 2); patternLen++) {
    // Check if the number can be made by repeating a pattern
    if (len % patternLen === 0) {
      const pattern = str.substring(0, patternLen)
      const repetitions = len / patternLen
      
      // Build what the number would be if this pattern repeated
      const repeated = pattern.repeat(repetitions)
      
      if (repeated === str && repetitions >= 2) {
        return true
      }
    }
  }
  
  return false
}
