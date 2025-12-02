<template>
<div class="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 py-12 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-lg shadow-xl p-8">
        <div class="flex items-center justify-between mb-6">
          <router-link 
            to="/" 
            class="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-2"
          >
            ← Back to Home
          </router-link>
          <span class="text-sm text-gray-500">December 2, 2025</span>
        </div>
        
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          Day 2: Invalid Product IDs
        </h1>
        
        <div class="prose max-w-none">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Problem Description</h2>
          <p class="text-gray-600 mb-4">
            A young Elf added invalid product IDs to the gift shop database. Find all invalid IDs in the given ranges.
          </p>
          <p class="text-gray-600 mb-2">
            <strong>Part 1:</strong> Numbers made of a sequence repeated exactly twice (e.g., 55, 6464, 123123).
          </p>
          <p class="text-gray-600 mb-6">
            <strong>Part 2:</strong> Numbers made of a sequence repeated at least twice (e.g., 111, 12341234, 565656).
          </p>
          
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Input</h2>
          <div class="mb-6">
            <textarea 
              v-model="input"
              class="w-full h-32 p-3 border border-gray-300 rounded font-mono text-sm"
              placeholder="Paste your input here (comma-separated ranges like 11-22,95-115)..."
            ></textarea>
            <button 
              @click="solve"
              class="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Solve
            </button>
          </div>
          
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Solution</h2>
          <div class="bg-gray-50 rounded-lg p-6 space-y-4">
            <div v-if="part1Answer !== null">
              <h3 class="text-lg font-semibold text-gray-700 mb-2">Part 1</h3>
              <p class="text-2xl font-bold text-indigo-600">Answer: {{ part1Answer }}</p>
              <p class="text-sm text-gray-600">Found {{ part1Count }} invalid ID(s) (exactly 2 repetitions)</p>
            </div>
            <div v-if="part2Answer !== null" class="pt-4 border-t border-gray-300">
              <h3 class="text-lg font-semibold text-gray-700 mb-2">Part 2</h3>
              <p class="text-2xl font-bold text-indigo-600">Answer: {{ part2Answer }}</p>
              <p class="text-sm text-gray-600">Found {{ part2Count }} invalid ID(s) (at least 2 repetitions)</p>
            </div>
            <p v-if="part1Answer === null && part2Answer === null" class="text-gray-600">Click "Solve" to calculate the answers</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useInputLoader } from '../../composables/useInputLoader'

const { input } = useInputLoader('Day2Input.txt')
const part1Answer = ref<number | null>(null)
const part1Count = ref<number>(0)
const part2Answer = ref<number | null>(null)
const part2Count = ref<number>(0)

// Part 1: exactly 2 repetitions
function isInvalidIDPart1(num: number): boolean {
  const str = num.toString()
  const len = str.length
  
  // Must be even length to be repeatable
  if (len % 2 !== 0) return false
  
  // Check if first half equals second half
  const halfLen = len / 2
  const firstHalf = str.substring(0, halfLen)
  const secondHalf = str.substring(halfLen)
  
  return firstHalf === secondHalf
}

// Part 2: at least 2 repetitions
function isInvalidIDPart2(num: number): boolean {
  const str = num.toString()
  const len = str.length
  
  // Try each possible pattern length (from 1 to len/2)
  for (let patternLen = 1; patternLen <= Math.floor(len / 2); patternLen++) {
    // Check if the number can be made by repeating a pattern
    if (len % patternLen === 0) {
      const pattern = str.substring(0, patternLen)
      const repetitions = len / patternLen
      
      // Build what the number would be if this pattern repeated
      const repeated = pattern.repeat(repetitions)
      
      if (repeated === str && repetitions >= 2) {
        return true
      }
    }
  }
  
  return false
}

function solve() {
  const ranges = input.value.trim().split(',').filter(r => r.trim())
  let part1Sum = 0
  let part1InvalidCount = 0
  let part2Sum = 0
  let part2InvalidCount = 0
  
  for (const range of ranges) {
    const [start, end] = range.trim().split('-').map(Number)
    
    for (let id = start; id <= end; id++) {
      if (isInvalidIDPart1(id)) {
        part1Sum += id
        part1InvalidCount++
      }
      if (isInvalidIDPart2(id)) {
        part2Sum += id
        part2InvalidCount++
      }
    }
  }
  
  part1Answer.value = part1Sum
  part1Count.value = part1InvalidCount
  part2Answer.value = part2Sum
  part2Count.value = part2InvalidCount
}
</script>
