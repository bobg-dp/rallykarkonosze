<template>
  <a
    href="#aktualnosci"
    class="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 group"
    aria-label="Przewiń do aktualności"
  >
    <span class="font-display font-semibold uppercase tracking-widest text-white text-xs opacity-70 group-hover:opacity-100 transition-opacity">
      Aktualności
    </span>
    <div ref="arrowRef" class="flex flex-col items-center gap-0.5">
      <span class="block w-0.5 h-6 bg-rally-yellow"></span>
      <svg class="w-5 h-5 text-rally-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" transform="rotate(0)"/>
      </svg>
    </div>
  </a>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const arrowRef = ref(null)
let anim = null

onMounted(() => {
  anim = gsap.to(arrowRef.value, {
    y: 8,
    duration: 0.8,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
  })
})

onUnmounted(() => {
  anim?.kill()
})
</script>
