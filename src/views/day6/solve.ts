/**
 * Parse problems in human-readable format (left-to-right)
 * Numbers are horizontal, read left-to-right
 */
function solvePart1(grid: string[][]): number {
  const rows = grid.length
  const cols = grid[0].length
  const operatorRow = rows - 1
  
  // Identify problem boundaries by finding columns of all spaces
  const problemRanges: [number, number][] = []
  let inProblem = false
  let startCol = 0
  
  for (let col = 0; col < cols; col++) {
    let allSpaces = true
    for (let row = 0; row < rows; row++) {
      if (grid[row][col] && grid[row][col].trim() !== '') {
        allSpaces = false
        break
      }
    }
    
    if (!allSpaces && !inProblem) {
      startCol = col
      inProblem = true
    } else if (allSpaces && inProblem) {
      problemRanges.push([startCol, col - 1])
      inProblem = false
    }
  }
  if (inProblem) {
    problemRanges.push([startCol, cols - 1])
  }
  
  let grandTotal = 0
  
  for (const [startCol, endCol] of problemRanges) {
    const numbers: number[] = []
    let operator = ''
    
    for (let row = 0; row < rows; row++) {
      let numStr = ''
      for (let col = startCol; col <= endCol; col++) {
        const char = grid[row][col] || ' '
        numStr += char
      }
      numStr = numStr.trim()
      
      if (row === operatorRow) {
        operator = numStr
      } else if (numStr !== '') {
        const num = parseInt(numStr)
        if (!isNaN(num)) {
          numbers.push(num)
        }
      }
    }
    
    if (numbers.length > 0 && operator) {
      let result = numbers[0]
      for (let i = 1; i < numbers.length; i++) {
        if (operator === '+') {
          result += numbers[i]
        } else if (operator === '*') {
          result *= numbers[i]
        }
      }
      grandTotal += result
    }
  }
  
  return grandTotal
}

/**
 * Parse problems in cephalopod format (right-to-left by columns)
 * Each COLUMN (read top-to-bottom) forms ONE NUMBER
 * Columns are processed right-to-left
 */
function solvePart2(grid: string[][]): number {
  const rows = grid.length
  const cols = grid[0].length
  const operatorRow = rows - 1
  
  // Identify problem boundaries (same as part 1)
  const problemRanges: [number, number][] = []
  let inProblem = false
  let startCol = 0
  
  for (let col = 0; col < cols; col++) {
    let allSpaces = true
    for (let row = 0; row < rows; row++) {
      if (grid[row][col] && grid[row][col].trim() !== '') {
        allSpaces = false
        break
      }
    }
    
    if (!allSpaces && !inProblem) {
      startCol = col
      inProblem = true
    } else if (allSpaces && inProblem) {
      problemRanges.push([startCol, col - 1])
      inProblem = false
    }
  }
  if (inProblem) {
    problemRanges.push([startCol, cols - 1])
  }
  
  let grandTotal = 0
  
  for (const [startCol, endCol] of problemRanges) {
    // Get operator
    let operator = ''
    for (let col = startCol; col <= endCol; col++) {
      const char = grid[operatorRow][col]
      if (char && char.trim() !== '') {
        operator = char.trim()
        break
      }
    }
    
    // In cephalopod math, each COLUMN is one NUMBER
    // Read columns right-to-left, and within each column, top-to-bottom forms the digits
    const numbers: number[] = []
    
    // Process each column from right to left
    for (let col = endCol; col >= startCol; col--) {
      let numStr = ''
      // Read this column top-to-bottom (excluding operator row)
      for (let row = 0; row < operatorRow; row++) {
        const char = grid[row][col]
        if (char && char.trim() !== '') {
          numStr += char
        }
      }
      if (numStr !== '') {
        const num = parseInt(numStr)
        if (!isNaN(num)) {
          numbers.push(num)
        }
      }
    }
    
    if (numbers.length > 0 && operator) {
      let result = numbers[0]
      for (let i = 1; i < numbers.length; i++) {
        if (operator === '+') {
          result += numbers[i]
        } else if (operator === '*') {
          result *= numbers[i]
        }
      }
      grandTotal += result
    }
  }
  
  return grandTotal
}

/**
 * Solve Day 6: Cephalopod Math Worksheet
 * 
 * @param input - The puzzle input as a string (grid of numbers and operators)
 * @returns An object with part1 and part2 answers
 */
export function solveDay6(input: string): { part1: number; part2: number } {
  const lines = input.trim().split('\n')
  const grid: string[][] = lines.map(line => line.split(''))
  
  if (grid.length === 0) return { part1: 0, part2: 0 }
  
  const part1 = solvePart1(grid)
  const part2 = solvePart2(grid)
  
  return { part1, part2 }
}
