import { readFileSync } from 'fs';

const input = readFileSync('./src/views/Day1Input.txt', 'utf-8');

function solve(input) {
  const lines = input.trim().split('\n');
  let position = 50;
  let part1Count = 0;
  let part2Count = 0;
  
  for (const line of lines) {
    const direction = line[0];
    const distance = parseInt(line.substring(1));
    
    // For part 2, simulate each click and count every time we point at 0
    for (let i = 0; i < distance; i++) {
      if (direction === 'L') {
        position--;
        if (position < 0) position = 99;
      } else if (direction === 'R') {
        position++;
        if (position >= 100) position = 0;
      }
      
      if (position === 0) {
        part2Count++;
      }
    }
    
    // Part 1: Check if we landed on 0
    if (position === 0) {
      part1Count++;
    }
  }
  
  return { part1: part1Count, part2: part2Count };
}

const result = solve(input);
console.log(`Part 1: ${result.part1}`);
console.log(`Part 2: ${result.part2}`);
