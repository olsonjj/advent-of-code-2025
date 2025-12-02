// Test the Day 1 Part 2 solution with the example from the markdown

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
  let part1Count = 0;  // Count when landing on 0
  let part2Count = 0;  // Count all times pointing at 0 (including during rotation)
  
  console.log(`Starting position: ${position}\n`);
  
  for (const line of lines) {
    const direction = line[0];
    const distance = parseInt(line.substring(1));
    const startPos = position;
    let crossedZero = 0;
    
    if (direction === 'L') {
      // Rotate left (toward lower numbers)
      position = (position - distance) % 100;
      if (position < 0) position += 100;
      
      // Count how many times we cross 0 during rotation
      if (startPos === 0) {
        // Starting at 0, don't count it
        crossedZero = Math.floor(distance / 100);
      } else if (startPos < distance) {
        // We wrap around through 0
        crossedZero = Math.floor(distance / 100) + 1;
      }
    } else if (direction === 'R') {
      // Rotate right (toward higher numbers)
      position = (position + distance) % 100;
      
      // Count how many times we cross 0 during rotation
      if (startPos === 0) {
        // Starting at 0, don't count it
        crossedZero = Math.floor(distance / 100);
      } else if (startPos + distance >= 100) {
        // We wrap around through 0
        crossedZero = Math.floor((startPos + distance) / 100);
      }
    }
    
    part2Count += crossedZero;
    
    // Part 1: Check if we landed on 0
    let landedOn = false;
    if (position === 0) {
      part1Count++;
      // For part 2, only add if we didn't already count it as a crossing
      if (crossedZero === 0) {
        part2Count++;
      }
      landedOn = true;
    }
    
    console.log(`${line}: ${startPos} -> ${position}${crossedZero > 0 ? ` (crossed 0 ${crossedZero}x)` : ''}${landedOn ? ' (landed on 0)' : ''}`);
  }
  
  return { part1: part1Count, part2: part2Count };
}

const result = solve(exampleInput);
console.log(`\n=== Results ===`);
console.log(`Part 1: ${result.part1} (Expected: 3)`);
console.log(`Part 2: ${result.part2} (Expected: 6)`);
console.log(`\nPart 1 Test ${result.part1 === 3 ? 'PASSED ✓' : 'FAILED ✗'}`);
console.log(`Part 2 Test ${result.part2 === 6 ? 'PASSED ✓' : 'FAILED ✗'}`);
