<template>
  <div class="border-2 border-[#00ff41] bg-[#0a0e1a]/80 p-4 mb-8 max-w-md mx-auto">
    <div class="text-center text-[#00ff41] font-mono">
      <div class="text-lg">NEXT PUZZLE UNLOCKS IN:</div>
      <div class="text-2xl mt-2">{{ countdown }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const countdown = ref<string>('00H : 00M : 00S')

// Update countdown every second
let countdownInterval: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  const updateCountdown = () => {
    const now = new Date()
    const nowUTC = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 
                            now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds())
    
    // Determine the current year (use current year if before Dec, next year if after Dec 25)
    const currentMonth = now.getUTCMonth()
    const currentDate = now.getUTCDate()
    let targetYear = now.getUTCFullYear()
    
    // If we're after December 25th, target next year's December 1st
    if (currentMonth === 11 && currentDate > 25) {
      targetYear += 1
    }
    
    // Find next puzzle unlock time
    let targetDate
    
    if (currentMonth < 11) {
      // Before December - count down to Dec 1st at midnight EST (5 AM UTC)
      targetDate = Date.UTC(targetYear, 11, 1, 5, 0, 0) // December 1st at midnight EST
    } else if (currentMonth === 11 && currentDate < 1) {
      // This shouldn't happen, but just in case
      targetDate = Date.UTC(targetYear, 11, 1, 5, 0, 0)
    } else if (currentMonth === 11 && currentDate >= 1 && currentDate < 25) {
      // During December 1-24 - count down to next day at midnight EST (5 AM UTC)
      targetDate = Date.UTC(targetYear, 11, currentDate + 1, 5, 0, 0)
    } else if (currentMonth === 11 && currentDate === 25) {
      // On December 25th - count down to Dec 26 (event end)
      const dec26Start = Date.UTC(targetYear, 11, 26, 5, 0, 0)
      
      if (nowUTC < dec26Start) {
        // Still on Dec 25th in UTC
        targetDate = dec26Start
      } else {
        // After Dec 25th - event is over
        countdown.value = 'EVENT COMPLETE'
        return
      }
    } else {
      // After December 25th - event is over
      countdown.value = 'EVENT COMPLETE'
      return
    }
    
    const diff = targetDate - nowUTC
    
    if (diff <= 0) {
      countdown.value = 'PUZZLE AVAILABLE!'
      return
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)
    
    if (days > 0) {
      countdown.value = `${days}D : ${String(hours).padStart(2, '0')}H : ${String(minutes).padStart(2, '0')}M : ${String(seconds).padStart(2, '0')}S`
    } else {
      countdown.value = `${String(hours).padStart(2, '0')}H : ${String(minutes).padStart(2, '0')}M : ${String(seconds).padStart(2, '0')}S`
    }
  }
  
  updateCountdown()
  countdownInterval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (countdownInterval) clearInterval(countdownInterval)
})
</script>
