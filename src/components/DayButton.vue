<template>
  <router-link
    :to="`/day${day}`"
    class="relative w-[100px] h-[100px] border border-[#00ff41] bg-[#00ff41]/20 hover:bg-[#00ff41]/30 hover:scale-105 transition-all duration-200"
  >
    <!-- Gold star for completed days -->
    <div v-if="completed" class="absolute top-1 right-1 text-xl z-10">
      ⭐
    </div>

    <!-- Day number -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-4xl font-bold font-mono text-[#00ff41]">
        {{ day }}
      </div>
    </div>

    <!-- Corner decorations -->
    <div class="absolute top-0.5 left-0.5 w-1 h-1 border-t border-l border-[#00ff41]"></div>
    <div class="absolute top-0.5 right-0.5 w-1 h-1 border-t border-r border-[#00ff41]"></div>
    <div class="absolute bottom-0.5 left-0.5 w-1 h-1 border-b border-l border-[#00ff41]"></div>
    <div class="absolute bottom-0.5 right-0.5 w-1 h-1 border-b border-r border-[#00ff41]"></div>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  day: number
  completed?: boolean
}>()
</script>
