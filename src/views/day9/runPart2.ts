import * as fs from 'fs'
import { solvePart2 } from './solve'

const input = fs.readFileSync('public/Day9Input.txt', 'utf8')
console.log('Calculating Part 2...')
const start = Date.now()
const answer = solvePart2(input)
const elapsed = Date.now() - start
console.log(`Part 2 Answer: ${answer}`)
console.log(`Time: ${elapsed}ms`)
