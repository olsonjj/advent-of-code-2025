/**
 * Solve Day 1: Secret Entrance
 * 
 * @param input - The puzzle input as a string
 * @returns An object with part1 and part2 answers
 */
export function solveDay1(input: string): { part1: number; part2: number } {
  const lines = input.trim().split('\n')
  let position = 50  // Starting position
  let part1Count = 0  // Count when landing on 0
  let part2Count = 0  // Count all times pointing at 0 during any rotation
  
  for (const line of lines) {
    const direction = line[0]
    const distance = parseInt(line.substring(1))
    
    // For part 2, simulate each click and count every time we point at 0
    for (let i = 0; i < distance; i++) {
      if (direction === 'L') {
        position--
        if (position < 0) position = 99
      } else if (direction === 'R') {
        position++
        if (position >= 100) position = 0
      }
      
      if (position === 0) {
        part2Count++
      }
    }
    
    // Part 1: Check if we landed on 0
    if (position === 0) {
      part1Count++
    }
  }
  
  return {
    part1: part1Count,
    part2: part2Count
  }
}
