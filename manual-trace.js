// Let's manually trace each step and count carefully

function traceRotation(start, direction, distance) {
  const positions = [];
  let pos = start;
  
  for (let i = 0; i < distance; i++) {
    if (direction === 'L') {
      pos--;
      if (pos < 0) pos = 99;
    } else {
      pos++;
      if (pos >= 100) pos = 0;
    }
    positions.push(pos);
  }
  
  return positions;
}

const rotations = [
  { start: 50, dir: 'L', dist: 68, end: 82 },
  { start: 82, dir: 'L', dist: 30, end: 52 },
  { start: 52, dir: 'R', dist: 48, end: 0 },
  { start: 0, dir: 'L', dist: 5, end: 95 },
  { start: 95, dir: 'R', dist: 60, end: 55 },
  { start: 55, dir: 'L', dist: 55, end: 0 },
  { start: 0, dir: 'L', dist: 1, end: 99 },
  { start: 99, dir: 'L', dist: 99, end: 0 },
  { start: 0, dir: 'R', dist: 14, end: 14 },
  { start: 14, dir: 'L', dist: 82, end: 32 },
];

let totalZeros = 0;

for (const rot of rotations) {
  const positions = traceRotation(rot.start, rot.dir, rot.dist);
  const zerosInRotation = positions.filter(p => p === 0).length;
  const endPos = positions[positions.length - 1];
  
  console.log(`${rot.dir}${rot.dist}: ${rot.start} -> ${endPos} (${zerosInRotation} zero${zerosInRotation !== 1 ? 's' : ''})`);
  if (zerosInRotation > 0) {
    console.log(`  Positions with 0: ${positions.map((p, i) => p === 0 ? i+1 : null).filter(x => x !== null).join(', ')}`);
  }
  
  totalZeros += zerosInRotation;
}

console.log(`\nTotal times dial points at 0: ${totalZeros}`);
console.log(`Expected: 6`);
