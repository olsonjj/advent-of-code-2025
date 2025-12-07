<template>
  <div class="min-h-screen bg-[#0a0e1a] py-8 px-4 relative overflow-hidden">
    <!-- Circuit board background pattern -->
    <div class="absolute inset-0 opacity-10">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M10,10 L90,10 M50,10 L50,50 M50,50 L10,50 M50,50 L90,50 M50,50 L50,90" 
                stroke="#00ff41" stroke-width="1" fill="none"/>
          <circle cx="10" cy="10" r="2" fill="#00ff41"/>
          <circle cx="90" cy="10" r="2" fill="#00ff41"/>
          <circle cx="50" cy="50" r="2" fill="#00ff41"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#circuit)"/>
      </svg>
    </div>

    <!-- Christmas trees -->
    <div class="absolute top-8 left-8 text-[#00ff41] opacity-50 text-6xl font-mono">
      <pre class="leading-tight text-xs">  *  
 /|\ 
/_|_\</pre>
    </div>
    <div class="absolute top-8 right-8 text-[#00ff41] opacity-50 text-6xl font-mono">
      <pre class="leading-tight text-xs">  *  
 /|\ 
/_|_\</pre>
    </div>

    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl md:text-5xl font-mono font-bold text-[#00ff41] mb-2 tracking-wider">
          &gt; ADVENT OF CODE 2025 _
        </h1>
      </div>

      <!-- Timer Box -->
      <CountdownTimer />

      <!-- Main Grid Container -->
      <div class="flex justify-center">
        <div class="border-4 border-[#00ff41] bg-[#0a0e1a]/80 p-8 relative">
        <!-- Circuit decorations on border -->
        <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,20 L20,20 M20,0 L20,40" stroke="#00ff41" stroke-width="2" fill="none"/>
            <circle cx="20" cy="20" r="3" fill="#00ff41"/>
          </svg>
        </div>

        <div class="grid grid-cols-5 gap-4 gap-x-4">
          <DayButton
            v-for="day in 25"
            :key="day"
            :day="day"
            :completed="day <= 7"
          />
        </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-8 text-center text-[#00ff41] font-mono text-sm">
        &gt; [About] | [Events] | (c) 2025 AoC Rudolph Operations. &lt;):&#123;&#123;
      </div>
    </div>
  </div>
</template>

<script setup>
import DayButton from '../components/DayButton.vue'
import CountdownTimer from '../components/CountdownTimer.vue'
</script>
