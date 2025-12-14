interface Point {
  x: number
  y: number
}

export function parseInput(input: string): Point[] {
  return input
    .trim()
    .split('\n')
    .map(line => {
      const [x, y] = line.split(',').map(Number)
      return { x, y }
    })
}

export function solvePart1(input: string): number {
  const points = parseInput(input)
  
  if (points.length < 2) return 0
  
  let maxArea = 0
  
  // Check all pairs of points as potential opposite corners
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const p1 = points[i]
      const p2 = points[j]
      
      // Calculate the area of the rectangle formed by these two points
      // Add 1 to include both endpoints
      const width = Math.abs(p2.x - p1.x) + 1
      const height = Math.abs(p2.y - p1.y) + 1
      const area = width * height
      
      maxArea = Math.max(maxArea, area)
    }
  }
  
  return maxArea
}

function isRectangleValid(p1: Point, p2: Point, points: Point[], idx1: number, idx2: number): boolean {
  const left = Math.min(p1.x, p2.x)
  const right = Math.max(p1.x, p2.x)
  const top = Math.min(p1.y, p2.y)
  const bottom = Math.max(p1.y, p2.y)
  
  // Check if test rectangle collides with any polygon edge using AABB collision detection
  for (let i = 0; i < points.length; i++) {
    const nextIdx = (i + 1) % points.length
    
    // Skip edges that include our test rectangle's corners
    if (i === idx1 || i === idx2 || nextIdx === idx1 || nextIdx === idx2) {
      continue
    }
    
    const edgeP1 = points[i]
    const edgeP2 = points[nextIdx]
    
    // Create bounding box for the edge segment
    const edgeLeft = Math.min(edgeP1.x, edgeP2.x)
    const edgeRight = Math.max(edgeP1.x, edgeP2.x)
    const edgeTop = Math.min(edgeP1.y, edgeP2.y)
    const edgeBottom = Math.max(edgeP1.y, edgeP2.y)
    
    // AABB collision detection
    if (left < edgeRight && right > edgeLeft && top < edgeBottom && bottom > edgeTop) {
      return false // Collision detected - rectangle intersects this edge
    }
  }
  
  return true // No collisions - rectangle is valid
}

export function solvePart2(input: string): number {
  const points = parseInput(input)
  
  if (points.length < 2) return 0
  
  let maxArea = 0
  
  // Check all pairs of red tiles as potential opposite corners
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const p1 = points[i]
      const p2 = points[j]
      
      const width = Math.abs(p2.x - p1.x) + 1
      const height = Math.abs(p2.y - p1.y) + 1
      const area = width * height
      
      // Skip if this rectangle can't beat current max
      if (area <= maxArea) continue
      
      // Check if rectangle is valid (only contains red/green tiles)
      if (isRectangleValid(p1, p2, points, i, j)) {
        maxArea = area
      }
    }
  }
  
  return maxArea
}
