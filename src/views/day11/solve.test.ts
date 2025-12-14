import { describe, it, expect } from 'vitest'
import { solveDay11 } from './solve'

describe('Day 11: Reactor', () => {
  const part1Example = `aaa: you hhh
you: bbb ccc
bbb: ddd eee
ccc: ddd eee fff
ddd: ggg
eee: out
fff: out
ggg: out
hhh: ccc fff iii
iii: out`

  const part2Example = `svr: aaa bbb
aaa: fft
fft: ccc
bbb: tty
tty: ccc
ccc: ddd eee
ddd: hub
hub: fff
eee: dac
dac: fff
fff: ggg hhh
ggg: out
hhh: out`

  it('should find all paths from you to out correctly for part 1', () => {
    const result = solveDay11(part1Example)
    expect(result.part1).toBe(5)
  })

  it('should find paths from svr to out that visit both dac and fft for part 2', () => {
    const result = solveDay11(part2Example)
    expect(result.part2).toBe(2)
  })
})
