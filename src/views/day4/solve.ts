/**
 * Count adjacent paper rolls for a given position
 */
function countAdjacentRolls(grid: string[][], row: number, col: number): number {
  let adjacentCount = 0
  
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],  // top-left, top, top-right
    [0, -1],           [0, 1],    // left, right
    [1, -1],  [1, 0],  [1, 1]     // bottom-left, bottom, bottom-right
  ]
  
  for (const [dr, dc] of directions) {
    const newRow = row + dr
    const newCol = col + dc
    
    if (newRow >= 0 && newRow < grid.length && 
        newCol >= 0 && newCol < grid[newRow].length) {
      if (grid[newRow][newCol] === '@') {
        adjacentCount++
      }
    }
  }
  
  return adjacentCount
}

/**
 * Find all accessible paper rolls (those with fewer than 4 adjacent rolls)
 */
function findAccessibleRolls(grid: string[][]): [number, number][] {
  const accessible: [number, number][] = []
  
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '@') {
        const adjacentCount = countAdjacentRolls(grid, row, col)
        if (adjacentCount < 4) {
          accessible.push([row, col])
        }
      }
    }
  }
  
  return accessible
}

/**
 * Solve Day 4: Forklift Paper Roll Access
 * 
 * @param input - The puzzle input as a string (grid of paper rolls)
 * @returns An object with part1 and part2 answers
 */
export function solveDay4(input: string): { part1: number; part2: number } {
  const lines = input.trim().split('\n')
  const grid = lines.map(line => line.split(''))
  
  // Part 1: Count initially accessible rolls
  const initialAccessible = findAccessibleRolls(grid)
  const part1Count = initialAccessible.length
  
  // Part 2: Iteratively remove accessible rolls
  const gridCopy = lines.map(line => line.split(''))
  let totalRemoved = 0
  
  while (true) {
    const accessible = findAccessibleRolls(gridCopy)
    
    if (accessible.length === 0) {
      break
    }
    
    // Remove all accessible rolls
    for (const [row, col] of accessible) {
      gridCopy[row][col] = '.'
    }
    
    totalRemoved += accessible.length
  }
  
  return {
    part1: part1Count,
    part2: totalRemoved
  }
}
