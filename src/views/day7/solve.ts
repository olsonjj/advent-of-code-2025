/**
 * Day 7: Laboratories - Tachyon Manifold
 * 
 * A tachyon beam enters at S and moves downward.
 * When it hits a splitter (^), it stops and creates two new beams (left and right).
 * The new beams continue moving downward until they hit another splitter or exit.
 */

interface Beam {
  row: number
  col: number
}

export function solvePart1(input: string): number {
  const lines = input.trim().split('\n')
  const grid = lines.map(line => line.split(''))
  const rows = grid.length
  const cols = grid[0].length
  
  // Find the starting position (S)
  let startCol = -1
  for (let col = 0; col < cols; col++) {
    if (grid[0][col] === 'S') {
      startCol = col
      break
    }
  }
  
  if (startCol === -1) {
    throw new Error('Starting position S not found')
  }
  
  // Track active beams and count splits
  let activeBeams: Beam[] = [{ row: 1, col: startCol }]
  let splitCount = 0
  
  // Track visited positions to avoid infinite loops
  const visited = new Set<string>()
  
  while (activeBeams.length > 0) {
    const newBeams: Beam[] = []
    
    for (const beam of activeBeams) {
      const key = `${beam.row},${beam.col}`
      
      // Skip if we've already processed this position
      if (visited.has(key)) {
        continue
      }
      visited.add(key)
      
      // Check if beam is out of bounds
      if (beam.row >= rows || beam.col < 0 || beam.col >= cols) {
        continue
      }
      
      const cell = grid[beam.row][beam.col]
      
      if (cell === '^') {
        // Hit a splitter - count it and create two new beams
        splitCount++
        
        // Create left beam
        if (beam.col > 0) {
          newBeams.push({ row: beam.row + 1, col: beam.col - 1 })
        }
        
        // Create right beam
        if (beam.col < cols - 1) {
          newBeams.push({ row: beam.row + 1, col: beam.col + 1 })
        }
      } else {
        // Empty space or S - continue downward
        newBeams.push({ row: beam.row + 1, col: beam.col })
      }
    }
    
    activeBeams = newBeams
  }
  
  return splitCount
}

export function solvePart2(input: string): number {
  const lines = input.trim().split('\n')
  const grid = lines.map(line => line.split(''))
  const rows = grid.length
  const cols = grid[0].length
  
  // Find the starting position (S)
  let startCol = -1
  for (let col = 0; col < cols; col++) {
    if (grid[0][col] === 'S') {
      startCol = col
      break
    }
  }
  
  if (startCol === -1) {
    throw new Error('Starting position S not found')
  }
  
  // Optimized approach: track the number of distinct paths reaching each position
  // Use dynamic programming - at each position, count how many ways to reach it
  
  // Map from position to count of timelines at that position
  let currentGeneration = new Map<string, number>()
  currentGeneration.set(`1,${startCol}`, 1)
  
  let totalCompleted = 0
  
  while (currentGeneration.size > 0) {
    const nextGeneration = new Map<string, number>()
    
    for (const [pos, count] of currentGeneration) {
      const [rowStr, colStr] = pos.split(',')
      const row = parseInt(rowStr)
      const col = parseInt(colStr)
      
      // Check if this position is outside the grid
      if (row >= rows || col < 0 || col >= cols) {
        // These timelines have completed
        totalCompleted += count
        continue
      }
      
      const cell = grid[row][col]
      
      if (cell === '^') {
        // Quantum split - each timeline splits into two
        if (col > 0) {
          const leftPos = `${row + 1},${col - 1}`
          nextGeneration.set(leftPos, (nextGeneration.get(leftPos) || 0) + count)
        }
        if (col < cols - 1) {
          const rightPos = `${row + 1},${col + 1}`
          nextGeneration.set(rightPos, (nextGeneration.get(rightPos) || 0) + count)
        }
      } else {
        // Continue downward
        const nextPos = `${row + 1},${col}`
        nextGeneration.set(nextPos, (nextGeneration.get(nextPos) || 0) + count)
      }
    }
    
    currentGeneration = nextGeneration
  }
  
  return totalCompleted
}
