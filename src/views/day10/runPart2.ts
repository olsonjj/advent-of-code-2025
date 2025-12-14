import { readFileSync } from 'fs'
import { solvePart2 } from './solve'

const input = readFileSync('./src/views/day10/input.txt', 'utf-8')
console.log('Part 2:', solvePart2(input))
