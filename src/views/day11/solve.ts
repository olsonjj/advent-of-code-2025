/**
 * Parse the input to build a graph of device connections
 */
function parseDevices(input: string): Map<string, string[]> {
  const graph = new Map<string, string[]>()
  
  const lines = input.trim().split('\n')
  for (const line of lines) {
    const [device, outputs] = line.split(': ')
    const outputList = outputs.split(' ')
    graph.set(device, outputList)
  }
  
  return graph
}

/**
 * Count all paths from start to end using memoized DFS
 */
function countAllPaths(
  graph: Map<string, string[]>,
  start: string,
  end: string
): number {
  const memo = new Map<string, number>()
  const visited = new Set<string>()
  
  function dfs(current: string): number {
    // If we reached the end, this is one path
    if (current === end) {
      return 1
    }
    
    // Check memoization (only use if not in current path to avoid cycles)
    const key = current
    if (!visited.has(current) && memo.has(key)) {
      return memo.get(key)!
    }
    
    // Mark current node as visited
    visited.add(current)
    
    // Get outputs for current device
    const outputs = graph.get(current) || []
    
    // Count paths through each output
    let count = 0
    for (const next of outputs) {
      if (!visited.has(next)) {
        count += dfs(next)
      }
    }
    
    // Backtrack: unmark current node
    visited.delete(current)
    
    // Memoize result
    memo.set(key, count)
    
    return count
  }
  
  return dfs(start)
}

/**
 * Count paths from start to end that visit both required devices
 */
function countPathsVisitingBoth(
  graph: Map<string, string[]>,
  start: string,
  end: string,
  device1: string,
  device2: string
): number {
  const memo = new Map<string, number>()
  const visited = new Set<string>()
  
  function dfs(current: string, hasDevice1: boolean, hasDevice2: boolean): number {
    // Update visited device flags
    const visited1 = hasDevice1 || current === device1
    const visited2 = hasDevice2 || current === device2
    
    // If we reached the end, check if we visited both devices
    if (current === end) {
      return (visited1 && visited2) ? 1 : 0
    }
    
    // Check memoization (only use if not in current path to avoid cycles)
    const key = `${current},${visited1},${visited2}`
    if (!visited.has(current) && memo.has(key)) {
      return memo.get(key)!
    }
    
    // Mark current node as visited
    visited.add(current)
    
    // Get outputs for current device
    const outputs = graph.get(current) || []
    
    // Count paths through each output
    let count = 0
    for (const next of outputs) {
      if (!visited.has(next)) {
        count += dfs(next, visited1, visited2)
      }
    }
    
    // Backtrack: unmark current node
    visited.delete(current)
    
    // Memoize result
    memo.set(key, count)
    
    return count
  }
  
  return dfs(start, false, false)
}

/**
 * Solve Day 11: Reactor
 * 
 * @param input - The puzzle input as a string (device connections)
 * @returns An object with part1 and part2 answers
 */
export function solveDay11(input: string): { part1: number; part2: number } {
  const graph = parseDevices(input)
  
  // Part 1: Count all paths from 'you' to 'out'
  const part1Count = countAllPaths(graph, 'you', 'out')
  
  // Part 2: Count all paths from 'svr' to 'out' that visit both 'dac' and 'fft'
  const part2Count = countPathsVisitingBoth(graph, 'svr', 'out', 'dac', 'fft')
  
  return {
    part1: part1Count,
    part2: part2Count
  }
}
