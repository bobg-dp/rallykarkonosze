<template>
  <section
    id="hero"
    class="relative w-full overflow-hidden"
    style="height: 100svh; min-height: 600px;"
  >
    <!-- Background gradient placeholder (zastąpić filmem/zdjęciem) -->
    <div class="absolute inset-0 hero-bg"></div>

    <!-- Żółto-czarne wstawki rajdowe – checker pattern overlay -->
    <div class="absolute inset-0 checker-overlay opacity-10 pointer-events-none"></div>

    <!-- Splash shape bottom - SVG żółty -->
    <div class="absolute bottom-0 left-0 right-0 pointer-events-none z-10">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" class="w-full block" style="height:80px; md:height:120px;">
        <path d="M0,80 C180,20 360,110 540,60 C720,10 900,100 1080,50 C1260,0 1350,70 1440,40 L1440,120 L0,120 Z" fill="#F8C800" opacity="0.15"/>
        <path d="M0,100 C240,40 480,120 720,80 C960,40 1200,110 1440,70 L1440,120 L0,120 Z" fill="#F8C800" opacity="0.25"/>
      </svg>
    </div>

    <!-- Content -->
    <div class="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
      <!-- Splash logo -->
      <div ref="logoRef" class="mb-6 md:mb-8 opacity-0">
        <img
          src="/logo-splash.png"
          alt="AMG Rally Karkonosze"
          class="h-32 md:h-48 lg:h-64 w-auto mx-auto drop-shadow-2xl"
        />
      </div>

      <!-- Tytuł rajdu -->
      <h1
        ref="titleRef"
        class="font-display font-black uppercase text-white text-5xl md:text-7xl lg:text-9xl leading-none tracking-tight opacity-0 drop-shadow-xl"
      >
        <span class="text-rally-yellow">AMG</span> Rally<br/>
        <span class="text-white">Karkonosze</span>
      </h1>

      <!-- Data i miejsce -->
      <div ref="dateRef" class="mt-6 md:mt-8 opacity-0">
        <div class="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <div class="flex items-center gap-3">
            <div class="w-8 h-0.5 bg-rally-yellow"></div>
            <span class="font-display font-bold uppercase tracking-widest text-white text-lg md:text-2xl">
              13–14 Czerwiec 2026
            </span>
            <div class="w-8 h-0.5 bg-rally-yellow"></div>
          </div>
        </div>
        <p class="font-display font-semibold uppercase tracking-[0.3em] text-rally-yellow text-sm md:text-lg mt-2">
          Jelenia Góra
        </p>
      </div>

      <!-- Badges rangi -->
      <div ref="badgesRef" class="mt-6 flex flex-col sm:flex-row items-center gap-3 opacity-0">
        <span class="bg-rally-yellow text-rally-black font-display font-bold uppercase text-xs md:text-sm px-4 py-2 tracking-wider">
          Runda RSMDS
        </span>
        <span class="border border-white text-white font-display font-bold uppercase text-xs md:text-sm px-4 py-2 tracking-wider">
          Runda Mistrzostw Południa
        </span>
      </div>
    </div>

    <!-- Scroll arrow -->
    <ScrollArrow />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollArrow from '../ui/ScrollArrow.vue'

const logoRef = ref(null)
const titleRef = ref(null)
const dateRef = ref(null)
const badgesRef = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.3 })

  tl.to(logoRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    from: { y: -30 },
  })
  .fromTo(titleRef.value,
    { opacity: 0, y: 40, skewY: 2 },
    { opacity: 1, y: 0, skewY: 0, duration: 1, ease: 'power4.out' },
    '-=0.3'
  )
  .fromTo(dateRef.value,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
    '-=0.4'
  )
  .fromTo(badgesRef.value,
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
    '-=0.3'
  )
})
</script>

<style scoped>
.hero-bg {
  background:
    radial-gradient(ellipse at 20% 50%, rgba(248,200,0,0.08) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(248,200,0,0.05) 0%, transparent 50%),
    linear-gradient(160deg, #0D0D0D 0%, #131414 40%, #21221E 70%, #0D0D0D 100%);
}

.checker-overlay {
  background-image:
    repeating-linear-gradient(
      45deg,
      #F8C800 0px,
      #F8C800 2px,
      transparent 2px,
      transparent 20px
    );
}
</style>
