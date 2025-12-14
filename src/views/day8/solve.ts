/**
 * Day 8: Playground - Junction Box Circuits
 * 
 * Connect junction boxes based on closest distances using a greedy approach.
 * Track circuits using Union-Find data structure.
 * After making 1000 connections, find the three largest circuits and multiply their sizes.
 */

interface JunctionBox {
  x: number
  y: number
  z: number
  index: number
}

interface Connection {
  box1: number
  box2: number
  distance: number
}

class UnionFind {
  private parent: number[]
  private size: number[]

  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i)
    this.size = Array(n).fill(1)
  }

  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]) // Path compression
    }
    return this.parent[x]
  }

  union(x: number, y: number): boolean {
    const rootX = this.find(x)
    const rootY = this.find(y)

    if (rootX === rootY) {
      return false // Already in same circuit
    }

    // Union by size
    if (this.size[rootX] < this.size[rootY]) {
      this.parent[rootX] = rootY
      this.size[rootY] += this.size[rootX]
    } else {
      this.parent[rootY] = rootX
      this.size[rootX] += this.size[rootY]
    }

    return true
  }

  getCircuitSizes(): number[] {
    const rootSizes = new Map<number, number>()
    
    for (let i = 0; i < this.parent.length; i++) {
      const root = this.find(i)
      rootSizes.set(root, this.size[root])
    }

    return Array.from(rootSizes.values())
  }
}

function parseInput(input: string): JunctionBox[] {
  return input.trim().split('\n').map((line, index) => {
    const [x, y, z] = line.split(',').map(Number)
    return { x, y, z, index }
  })
}

function calculateDistance(box1: JunctionBox, box2: JunctionBox): number {
  const dx = box1.x - box2.x
  const dy = box1.y - box2.y
  const dz = box1.z - box2.z
  return Math.sqrt(dx * dx + dy * dy + dz * dz)
}

function getAllConnections(boxes: JunctionBox[]): Connection[] {
  const connections: Connection[] = []
  
  for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      const distance = calculateDistance(boxes[i], boxes[j])
      connections.push({
        box1: i,
        box2: j,
        distance
      })
    }
  }

  // Sort by distance (shortest first)
  connections.sort((a, b) => a.distance - b.distance)
  
  return connections
}

export function solvePart1(input: string): number {
  const boxes = parseInput(input)
  const n = boxes.length
  const uf = new UnionFind(n)
  
  // Get all possible connections sorted by distance
  const connections = getAllConnections(boxes)
  
  // Attempt the 1000 shortest connections
  const targetConnections = Math.min(1000, connections.length)
  
  for (let i = 0; i < targetConnections; i++) {
    const conn = connections[i]
    // Try to connect these two boxes
    // union() returns true if they weren't already in the same circuit
    uf.union(conn.box1, conn.box2)
  }
  
  // Get all circuit sizes
  const circuitSizes = uf.getCircuitSizes()
  
  // Sort in descending order and get the three largest
  circuitSizes.sort((a, b) => b - a)
  
  // Ensure we have at least 3 circuits to multiply
  if (circuitSizes.length < 3) {
    // Pad with 1s if needed
    while (circuitSizes.length < 3) {
      circuitSizes.push(1)
    }
  }
  
  // Multiply the three largest
  const result = circuitSizes[0] * circuitSizes[1] * circuitSizes[2]
  
  return result
}

export function solvePart2(input: string): number {
  const boxes = parseInput(input)
  const n = boxes.length
  const uf = new UnionFind(n)
  
  // Get all possible connections sorted by distance
  const connections = getAllConnections(boxes)
  
  // Keep connecting until all boxes are in one circuit
  let lastConnection: Connection | null = null
  
  for (const conn of connections) {
    // Try to connect these two boxes
    const wasConnected = uf.union(conn.box1, conn.box2)
    
    if (wasConnected) {
      lastConnection = conn
      
      // Check if we now have only one circuit
      const circuitSizes = uf.getCircuitSizes()
      if (circuitSizes.length === 1) {
        // All boxes are now in one circuit!
        break
      }
    }
  }
  
  if (!lastConnection) {
    throw new Error('Could not connect all boxes into one circuit')
  }
  
  // Multiply the X coordinates of the last two boxes connected
  const x1 = boxes[lastConnection.box1].x
  const x2 = boxes[lastConnection.box2].x
  
  return x1 * x2
}
