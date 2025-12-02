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
import { solveDay2 } from './solve'

const { input } = useInputLoader('Day2Input.txt')
const part1Answer = ref<number | null>(null)
const part1Count = ref<number>(0)
const part2Answer = ref<number | null>(null)
const part2Count = ref<number>(0)

function solve() {
  const result = solveDay2(input.value)
  part1Answer.value = result.part1
  part2Answer.value = result.part2
  // Note: counts are not returned by solve function, keeping UI simple
}
</script>
