import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { solvePart1 } from './solve'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const input = readFileSync(join(__dirname, 'input.txt'), 'utf-8')
const result = solvePart1(input)

console.log('Day 12 - Christmas Tree Farm')
console.log('=============================')
console.log(`Part 1: ${result}`)
