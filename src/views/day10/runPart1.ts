import { readFileSync } from 'fs'
import { solvePart1 } from './solve'

const input = readFileSync('./src/views/day10/input.txt', 'utf-8')
console.log('Part 1:', solvePart1(input))
