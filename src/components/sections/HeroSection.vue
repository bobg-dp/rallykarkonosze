<template>
  <section
    id="hero"
    class="relative w-full overflow-hidden"
    style="height: 100svh; min-height: 600px;"
  >
    <!-- Background photo -->
    <div class="absolute inset-0 hero-photo"></div>

    <!-- Background gradient / darkening -->
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
    <div class="relative z-20 flex flex-col md:flex-row items-center justify-center h-full px-6 md:px-12 lg:px-20 gap-6 md:gap-10 lg:gap-16 text-center md:text-left">

      <!-- Logo splash – lewa strona na desktop -->
      <div ref="logoRef" class="shrink-0 opacity-0">
        <img
          src="/logo-splash.png"
          alt="AMG Rally Karkonosze"
          class="h-40 md:h-56 lg:h-72 xl:h-80 w-auto drop-shadow-2xl"
        />
      </div>

      <!-- Treść – prawa strona na desktop -->
      <div>
        <!-- Tytuł rajdu -->
        <h1
          ref="titleRef"
          class="font-display font-black uppercase text-white text-5xl md:text-6xl lg:text-8xl xl:text-9xl leading-none tracking-tight opacity-0 drop-shadow-xl"
        >
          <span class="text-rally-yellow">AMG</span> Rally<br/>
          <span class="text-white">Karkonosze</span>
        </h1>

        <!-- Data i miejsce -->
        <div ref="dateRef" class="mt-5 md:mt-6 opacity-0">
          <div class="flex items-center justify-center md:justify-start gap-3">
            <div class="w-8 h-0.5 bg-rally-yellow"></div>
            <span class="font-display font-bold uppercase tracking-widest text-white text-base md:text-xl lg:text-2xl">
              13–14 Czerwiec 2026
            </span>
            <div class="w-8 h-0.5 bg-rally-yellow"></div>
          </div>
          <p class="font-display font-semibold uppercase tracking-[0.3em] text-rally-yellow text-sm md:text-base lg:text-lg mt-2">
            Jelenia Góra
          </p>
        </div>

        <!-- Logotypy cykli -->
        <div ref="badgesRef" class="mt-5 flex flex-col sm:flex-row items-center md:items-start gap-3 md:gap-4 opacity-0">
          <div class="flex items-center justify-center w-36 h-14 md:w-40 md:h-16">
            <img
              src="/assets/cycles/rsmds.webp"
              alt="Rajdowe Samochodowe Mistrzostwa Dolnego Śląska"
              class="h-11 md:h-14 w-auto object-contain drop-shadow-lg"
              loading="lazy"
            />
          </div>
          <div class="flex items-center justify-center w-36 h-14 md:w-40 md:h-16">
            <img
              src="/assets/cycles/rpp-transparent.webp"
              alt="Rajdowy Puchar Południa"
              class="h-10 md:h-12 w-auto object-contain drop-shadow-lg"
              loading="lazy"
            />
          </div>
          <div class="flex items-center justify-center w-36 h-14 md:w-40 md:h-16">
            <img
              src="/assets/cycles/rmp-white.webp"
              alt="Rajdowe Mistrzostwa Południa"
              class="h-10 md:h-12 w-auto object-contain drop-shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Photo credit -->
    <div class="absolute bottom-40 right-0 z-20">
      <div class="bg-gradient-to-l from-black/55 via-black/28 to-transparent pr-4 pb-0 pl-12 pt-0 md:pr-8 md:pb-2 md:pl-20 md:pt-2">
        <a
          href="https://www.facebook.com/gabapix"
          target="_blank"
          rel="noopener noreferrer"
          class="block text-right font-display text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/70 drop-shadow-md transition-colors duration-200 hover:text-white"
          aria-label="Foto: Gabapix - profil Facebook"
        >
          foto: Gabapix
        </a>
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

  // Logo wjeżdża z lewej
  tl.fromTo(logoRef.value,
    { opacity: 0, x: -50 },
    { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' }
  )
  // Tytuł wjeżdża z prawej
  .fromTo(titleRef.value,
    { opacity: 0, x: 40, skewY: 1.5 },
    { opacity: 1, x: 0, skewY: 0, duration: 1, ease: 'power4.out' },
    '-=0.5'
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
    linear-gradient(160deg, rgba(13,13,13,0.86) 0%, rgba(19,20,20,0.74) 40%, rgba(33,34,30,0.72) 70%, rgba(13,13,13,0.88) 100%);
}

.hero-photo {
  background-image: url('/hero.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transform: scale(1.03);
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
