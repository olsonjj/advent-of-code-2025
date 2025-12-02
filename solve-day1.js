import { readFileSync } from 'fs';

const input = readFileSync('./src/views/Day1Input.txt', 'utf-8');

function solve(input) {
  const lines = input.trim().split('\n');
  let position = 50;  // Starting position
  let zeroCount = 0;
  
  for (const line of lines) {
    const direction = line[0];
    const distance = parseInt(line.substring(1));
    
    if (direction === 'L') {
      // Rotate left (toward lower numbers)
      position = (position - distance) % 100;
      if (position < 0) position += 100;
    } else if (direction === 'R') {
      // Rotate right (toward higher numbers)
      position = (position + distance) % 100;
    }
    
    // Check if we landed on 0
    if (position === 0) {
      zeroCount++;
    }
  }
  
  return zeroCount;
}

const result = solve(input);
console.log(`Answer: ${result}`);
