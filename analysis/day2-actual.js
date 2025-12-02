import fs from 'fs';

function isInvalidID(num) {
  const str = num.toString();
  const len = str.length;
  
  if (len % 2 !== 0) return false;
  
  const halfLen = len / 2;
  const firstHalf = str.substring(0, halfLen);
  const secondHalf = str.substring(halfLen);
  
  return firstHalf === secondHalf;
}

function findInvalidIDs(rangeStr) {
  const ranges = rangeStr.split(',').filter(r => r.trim());
  let totalSum = 0;
  let invalidIDs = [];
  
  for (const range of ranges) {
    const [start, end] = range.trim().split('-').map(Number);
    
    for (let id = start; id <= end; id++) {
      if (isInvalidID(id)) {
        invalidIDs.push(id);
        totalSum += id;
      }
    }
  }
  
  return { totalSum, invalidIDs };
}

// Read actual input
const input = fs.readFileSync('/Users/johnolson/Documents/Code/advent-of-code-2025/src/views/day2/input.txt', 'utf8');

console.log('Solving with actual input...');
const result = findInvalidIDs(input.trim());
console.log('Number of invalid IDs:', result.invalidIDs.length);
console.log('Invalid IDs:', result.invalidIDs);
console.log('\nAnswer:', result.totalSum);
