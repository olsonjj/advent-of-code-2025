/**
 * Parse ranges and ingredient IDs from input.
 * Handles cases with or without a separating blank line.
 */
function parseInput(input: string): { ranges: [number, number][]; ids: number[] } {
  const rawLines = input.split('\n')
  // Do not trim entire input to preserve potential trailing blank line position
  const lines = rawLines.map(l => l.trimEnd())
  const blankLineIndex = lines.findIndex(line => line.trim() === '')

  const rangeLines = blankLineIndex === -1 ? lines.filter(l => l.trim() !== '')
                                            : lines.slice(0, blankLineIndex)
  const idLines = blankLineIndex === -1 ? [] : lines.slice(blankLineIndex + 1).filter(l => l.trim() !== '')

  const ranges: [number, number][] = []
  for (const line of rangeLines) {
    const [startStr, endStr] = line.split('-')
    const start = Number(startStr)
    const end = Number(endStr)
    if (!Number.isFinite(start) || !Number.isFinite(end)) continue
    // normalize so start <= end
    ranges.push(start <= end ? [start, end] : [end, start])
  }

  const ids: number[] = idLines.map(n => Number(n)).filter(n => Number.isFinite(n))
  return { ranges, ids }
}

/**
 * Merge overlapping or touching ranges and return merged list.
 */
function mergeRanges(ranges: [number, number][]): [number, number][] {
  if (ranges.length === 0) return []
  const sorted = [...ranges].sort((a, b) => a[0] - b[0] || a[1] - b[1])
  const merged: [number, number][] = []
  let [curStart, curEnd] = sorted[0]
  for (let i = 1; i < sorted.length; i++) {
    const [s, e] = sorted[i]
    if (s <= curEnd + 1) {
      // overlap or touch; extend
      if (e > curEnd) curEnd = e
    } else {
      merged.push([curStart, curEnd])
      curStart = s
      curEnd = e
    }
  }
  merged.push([curStart, curEnd])
  return merged
}

/**
 * Determine if an id is within any merged range via binary search.
 */
function idIsFresh(merged: [number, number][], id: number): boolean {
  let lo = 0, hi = merged.length - 1
  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    const [s, e] = merged[mid]
    if (id < s) hi = mid - 1
    else if (id > e) lo = mid + 1
    else return true
  }
  return false
}

/**
 * Solve Day 5: Fresh Ingredient Checker
 *
 * part1: Count available ingredient IDs that fall within any fresh range.
 * part2: Count the total number of unique IDs covered by the union of all ranges.
 */
export function solveDay5(input: string): { part1: number; part2: number } {
  const { ranges, ids } = parseInput(input)
  const merged = mergeRanges(ranges)

  // Part 1
  let part1 = 0
  for (const id of ids) {
    if (idIsFresh(merged, id)) part1++
  }

  // Part 2: total size of the union of ranges (inclusive)
  let part2 = 0
  for (const [s, e] of merged) {
    part2 += (e - s + 1)
  }

  return { part1, part2 }
}
