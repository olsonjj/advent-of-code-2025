/**
 * Day 3: Battery Joltage Calculator
 * 
 * Find the maximum joltage each battery bank can produce by selecting
 * exactly two batteries, then sum all maximum joltages.
 */

/**
 * Finds the maximum joltage from a single battery bank
 * by selecting exactly two batteries (digits).
 */
function findMaxJoltage(bank: string): number {
  let maxJoltage = 0
  
  // Try all pairs of batteries (positions i and j where i < j)
  for (let i = 0; i < bank.length - 1; i++) {
    for (let j = i + 1; j < bank.length; j++) {
      const digit1 = bank[i]
      const digit2 = bank[j]
      const joltage = parseInt(digit1 + digit2, 10)
      
      if (joltage > maxJoltage) {
        maxJoltage = joltage
      }
    }
  }
  
  return maxJoltage
}

/**
 * Part 1: Calculate the total output joltage from all battery banks
 */
export function solvePart1(input: string): number {
  const banks = input.trim().split('\n')
  let totalJoltage = 0
  
  for (const bank of banks) {
    if (bank.trim()) {
      totalJoltage += findMaxJoltage(bank.trim())
    }
  }
  
  return totalJoltage
}

/**
 * Finds the maximum joltage from a single battery bank
 * by selecting exactly twelve batteries (digits).
 */
function findMaxJoltage12(bank: string): number {
  // We need to select 12 digits from the bank to form the largest number
  // Greedy approach: at each position, take the largest digit we can
  // while still leaving enough digits for the remaining positions
  let result = ''
  let startIdx = 0
  
  for (let i = 0; i < 12; i++) {
    const remainingDigitsNeeded = 12 - i - 1
    const searchEnd = bank.length - remainingDigitsNeeded
    
    // Find the largest digit in the valid range
    let maxDigit = '0'
    let maxIdx = startIdx
    
    for (let j = startIdx; j < searchEnd; j++) {
      if (bank[j] > maxDigit) {
        maxDigit = bank[j]
        maxIdx = j
      }
    }
    
    result += maxDigit
    startIdx = maxIdx + 1
  }
  
  return parseInt(result, 10)
}

/**
 * Part 2: Calculate the total output joltage with 12 batteries per bank
 */
export function solvePart2(input: string): number {
  const banks = input.trim().split('\n')
  let totalJoltage = 0
  
  for (const bank of banks) {
    if (bank.trim()) {
      totalJoltage += findMaxJoltage12(bank.trim())
    }
  }
  
  return totalJoltage
}
