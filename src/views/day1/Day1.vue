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
          <span class="text-sm text-gray-500">December 1, 2025</span>
        </div>
        
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          Day 1: Secret Entrance
        </h1>
        
        <div class="prose max-w-none">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Problem Description</h2>
          <p class="text-gray-600 mb-4">
            The safe has a dial with numbers 0-99. Follow rotation instructions (L for left, R for right) to move the dial.
          </p>
          <p class="text-gray-600 mb-2">
            <strong>Part 1:</strong> Count how many times the dial points at 0 after any rotation.
          </p>
          <p class="text-gray-600 mb-6">
            <strong>Part 2:</strong> Count how many times the dial points at 0 during or after any rotation (including passes through 0).
          </p>
          
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Input</h2>
          <div class="mb-6">
            <textarea 
              v-model="input"
              class="w-full h-32 p-3 border border-gray-300 rounded font-mono text-sm"
              placeholder="Paste your input here..."
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
              <p class="text-sm text-gray-600">Dial landed on 0 {{ part1Answer }} time(s)</p>
            </div>
            <div v-if="part2Answer !== null" class="pt-4 border-t border-gray-300">
              <h3 class="text-lg font-semibold text-gray-700 mb-2">Part 2</h3>
              <p class="text-2xl font-bold text-indigo-600">Answer: {{ part2Answer }}</p>
              <p class="text-sm text-gray-600">Dial pointed at 0 {{ part2Answer }} time(s) (including during rotations)</p>
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

const { input } = useInputLoader('Day1Input.txt')
const part1Answer = ref<number | null>(null)
const part2Answer = ref<number | null>(null)

function solve() {
  const lines = input.value.trim().split('\n')
  let position = 50  // Starting position
  let part1Count = 0  // Count when landing on 0
  let part2Count = 0  // Count all times pointing at 0 during any rotation
  
  for (const line of lines) {
    const direction = line[0]
    const distance = parseInt(line.substring(1))
    
    // For part 2, simulate each click and count every time we point at 0
    for (let i = 0; i < distance; i++) {
      if (direction === 'L') {
        position--
        if (position < 0) position = 99
      } else if (direction === 'R') {
        position++
        if (position >= 100) position = 0
      }
      
      if (position === 0) {
        part2Count++
      }
    }
    
    // Part 1: Check if we landed on 0
    if (position === 0) {
      part1Count++
    }
  }
  
  part1Answer.value = part1Count
  part2Answer.value = part2Count
}
</script>
