import fs from 'fs';

function isInvalidIDPart2(num) {
  const str = num.toString();
  const len = str.length;
  
  // Try each possible pattern length (from 1 to len/2)
  for (let patternLen = 1; patternLen <= Math.floor(len / 2); patternLen++) {
    // Check if the number can be made by repeating a pattern
    if (len % patternLen === 0) {
      const pattern = str.substring(0, patternLen);
      const repetitions = len / patternLen;
      
      // Build what the number would be if this pattern repeated
      const repeated = pattern.repeat(repetitions);
      
      if (repeated === str && repetitions >= 2) {
        return true;
      }
    }
  }
  
  return false;
}

function findInvalidIDsPart2(rangeStr) {
  const ranges = rangeStr.split(',').filter(r => r.trim());
  let totalSum = 0;
  let invalidIDs = [];
  
  for (const range of ranges) {
    const [start, end] = range.trim().split('-').map(Number);
    
    for (let id = start; id <= end; id++) {
      if (isInvalidIDPart2(id)) {
        invalidIDs.push(id);
        totalSum += id;
      }
    }
  }
  
  return { totalSum, invalidIDs };
}

// Read actual input
const input = fs.readFileSync('/Users/johnolson/Documents/Code/advent-of-code-2025/src/views/day2/input.txt', 'utf8');

console.log('Solving Part 2 with actual input...');
const result = findInvalidIDsPart2(input.trim());
console.log('Number of invalid IDs:', result.invalidIDs.length);
console.log('\nAnswer:', result.totalSum);
