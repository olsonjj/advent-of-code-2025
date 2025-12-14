import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { solveDay11 } from './solve'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const input = readFileSync(join(__dirname, 'input.txt'), 'utf-8')
const result = solveDay11(input)

console.log('Day 11 - Reactor')
console.log('================')
console.log(`Part 1: ${result.part1}`)
console.log(`Part 2: ${result.part2}`)
