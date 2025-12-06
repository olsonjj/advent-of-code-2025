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
          <span class="text-sm text-gray-500">December 6, 2025</span>
        </div>
        
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          Day 6: Cephalopod Math Worksheet
        </h1>
        
        <div class="prose max-w-none">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Problem Description</h2>
          <p class="text-gray-600 mb-4">
            Help a young cephalopod with her math homework! The worksheet has problems arranged horizontally, with numbers stacked vertically and operators at the bottom. Problems are separated by columns of spaces.
          </p>
          <p class="text-gray-600 mb-2">
            <strong>Part 1:</strong> Calculate the grand total by solving each problem and adding all the results together.
          </p>
          <p class="text-gray-600 mb-6">
            <strong>Part 2:</strong> Read the worksheet in cephalopod math format - each column (read top-to-bottom) forms one number, and columns are processed right-to-left.
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
              <p class="text-sm text-gray-600">Grand total: {{ part1Answer }}</p>
            </div>
            <div v-if="part2Answer !== null" class="pt-4 border-t border-gray-300">
              <h3 class="text-lg font-semibold text-gray-700 mb-2">Part 2</h3>
              <p class="text-2xl font-bold text-indigo-600">Answer: {{ part2Answer }}</p>
              <p class="text-sm text-gray-600">Cephalopod math grand total: {{ part2Answer }}</p>
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
import { solveDay6 } from './solve'

const { input } = useInputLoader('Day6Input.txt')
const part1Answer = ref<number | null>(null)
const part2Answer = ref<number | null>(null)

function solve() {
  const result = solveDay6(input.value)
  part1Answer.value = result.part1
  part2Answer.value = result.part2
}
</script>
