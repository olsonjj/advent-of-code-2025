// Day 2 Part 2: Invalid Product IDs (at least 2 repetitions)

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

// Test individual cases from part 2
console.log('Testing Part 2 cases:');
console.log('11 is invalid?', isInvalidIDPart2(11)); // true (1 twice)
console.log('22 is invalid?', isInvalidIDPart2(22)); // true (2 twice)
console.log('99 is invalid?', isInvalidIDPart2(99)); // true (9 twice)
console.log('111 is invalid?', isInvalidIDPart2(111)); // true (1 three times)
console.log('999 is invalid?', isInvalidIDPart2(999)); // true (9 three times)
console.log('1010 is invalid?', isInvalidIDPart2(1010)); // true (10 twice)
console.log('101 is invalid?', isInvalidIDPart2(101)); // false
console.log('12341234 is invalid?', isInvalidIDPart2(12341234)); // true (1234 twice)
console.log('123123123 is invalid?', isInvalidIDPart2(123123123)); // true (123 three times)
console.log('1212121212 is invalid?', isInvalidIDPart2(1212121212)); // true (12 five times)
console.log('1111111 is invalid?', isInvalidIDPart2(1111111)); // true (1 seven times)
console.log('565656 is invalid?', isInvalidIDPart2(565656)); // true (56 three times)
console.log('824824824 is invalid?', isInvalidIDPart2(824824824)); // true (824 three times)
console.log('2121212121 is invalid?', isInvalidIDPart2(2121212121)); // true (21 five times)

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

// Test with example
const exampleInput = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`;

console.log('\nTesting Part 2 with example...');
const result = findInvalidIDsPart2(exampleInput);
console.log('Invalid IDs found:', result.invalidIDs);
console.log('Total sum:', result.totalSum);
console.log('Expected: 4174379265');
console.log('Match:', result.totalSum === 4174379265);
