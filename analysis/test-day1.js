// Test the Day 1 solution with the example from the markdown

const exampleInput = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;

function solve(input) {
  const lines = input.trim().split('\n');
  let position = 50;  // Starting position
  let zeroCount = 0;
  
  console.log(`Starting position: ${position}`);
  
  for (const line of lines) {
    const direction = line[0];
    const distance = parseInt(line.substring(1));
    const oldPosition = position;
    
    if (direction === 'L') {
      // Rotate left (toward lower numbers)
      position = (position - distance) % 100;
      if (position < 0) position += 100;
    } else if (direction === 'R') {
      // Rotate right (toward higher numbers)
      position = (position + distance) % 100;
    }
    
    console.log(`${line}: ${oldPosition} -> ${position}${position === 0 ? ' (ZERO!)' : ''}`);
    
    // Check if we landed on 0
    if (position === 0) {
      zeroCount++;
    }
  }
  
  return zeroCount;
}

const result = solve(exampleInput);
console.log(`\nFinal answer: ${result}`);
console.log(`Expected: 3`);
console.log(`Test ${result === 3 ? 'PASSED ✓' : 'FAILED ✗'}`);
