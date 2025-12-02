// Day 2: Invalid Product IDs
// Find numbers that are a sequence repeated twice (e.g., 11, 6464, 123123)

function isInvalidID(num) {
  const str = num.toString();
  const len = str.length;
  
  // Must be even length to be repeatable
  if (len % 2 !== 0) return false;
  
  // Check if first half equals second half
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

// Test with example
const exampleInput = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`;

console.log('Testing example...');
const result = findInvalidIDs(exampleInput);
console.log('Invalid IDs found:', result.invalidIDs);
console.log('Total sum:', result.totalSum);
console.log('Expected: 1227775554');
console.log('Match:', result.totalSum === 1227775554);

// Test individual cases from the problem
console.log('\nTesting individual cases:');
console.log('11 is invalid?', isInvalidID(11)); // true
console.log('22 is invalid?', isInvalidID(22)); // true
console.log('99 is invalid?', isInvalidID(99)); // true
console.log('1010 is invalid?', isInvalidID(1010)); // true
console.log('101 is invalid?', isInvalidID(101)); // false
console.log('6464 is invalid?', isInvalidID(6464)); // true
console.log('123123 is invalid?', isInvalidID(123123)); // true
