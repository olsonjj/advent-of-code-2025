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
          <span class="text-sm text-gray-500">December 7, 2025</span>
        </div>
        
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          Day 7: Laboratories
        </h1>
        
        <div class="prose max-w-none">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Problem Description</h2>
          <p class="text-gray-600 mb-4">
            You need to diagnose a malfunctioning tachyon manifold. A tachyon beam enters at the location marked <code>S</code> and moves downward. When the beam encounters a splitter (<code>^</code>), it stops and creates two new beams - one from the immediate left and one from the immediate right of the splitter.
          </p>
          <p class="text-gray-600 mb-4">
            <strong>Part 1:</strong> Count how many times the beam will be split in total.
          </p>
          <p class="text-gray-600 mb-6">
            <strong>Part 2:</strong> With a quantum tachyon manifold, a single particle takes both left and right paths at each splitter (many-worlds interpretation). Count how many different timelines result.
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
              <p class="text-sm text-gray-600">Total beam splits: {{ part1Answer }}</p>
            </div>
            <div v-if="part2Answer !== null" class="pt-4 border-t border-gray-300">
              <h3 class="text-lg font-semibold text-gray-700 mb-2">Part 2</h3>
              <p class="text-2xl font-bold text-indigo-600">Answer: {{ part2Answer }}</p>
              <p class="text-sm text-gray-600">Total timelines: {{ part2Answer }}</p>
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
import { solvePart1, solvePart2 } from './solve'

const { input } = useInputLoader('Day7Input.txt')
const part1Answer = ref<number | null>(null)
const part2Answer = ref<number | null>(null)

function solve() {
  part1Answer.value = solvePart1(input.value)
  part2Answer.value = solvePart2(input.value)
}
</script>
