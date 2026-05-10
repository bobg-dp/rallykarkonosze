<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 flex flex-col transition-[filter] duration-300"
    :class="scrolled ? 'shadow-lg' : ''"
  >
    <!-- Top bar -->
    <div
      class="bg-white flex items-center justify-between px-4 md:px-8 transition-[height,min-height,padding] duration-300"
      :style="{ height: topBarHeight, minHeight: topBarHeight }"
    >
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center group shrink-0" aria-label="AMG Rally Karkonosze – strona główna">
        <img
          src="/logo.png"
          alt="AMG Rally Karkonosze"
          class="w-auto transition-[height,transform] duration-300 group-hover:scale-105"
          :class="isCompactHeader ? 'h-10 md:h-12' : 'h-16 md:h-24'"
        />
      </RouterLink>

      <!-- Desktop: social + wyniki -->
      <div class="hidden md:flex items-center gap-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-rally-black hover:text-rally-yellow transition-colors duration-200"
          aria-label="Facebook"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073C24 5.40548 18.627 0 12 0S0 5.40548 0 12.073C0 18.0994 4.38825 23.0943 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.0943 24 18.0994 24 12.073z"/>
          </svg>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-rally-black hover:text-rally-yellow transition-colors duration-200"
          aria-label="Instagram"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-rally-black hover:text-rally-yellow transition-colors duration-200"
          aria-label="YouTube"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
          </svg>
        </a>
        <a
          href="#"
          class="ml-4 bg-rally-yellow text-rally-black font-display font-bold uppercase tracking-wider text-sm px-4 py-2 hover:bg-rally-yellow-dark transition-colors duration-200"
        >
          Wyniki Online
        </a>
      </div>

      <!-- Mobile: hamburger -->
      <button
        class="md:hidden flex flex-col justify-center items-center gap-1.5 p-2"
        @click="mobileMenuOpen = !mobileMenuOpen"
        :aria-expanded="mobileMenuOpen"
        aria-label="Menu"
      >
        <span
          class="block w-6 h-0.5 bg-rally-black transition-all duration-300"
          :class="mobileMenuOpen ? 'rotate-45 translate-y-2' : ''"
        ></span>
        <span
          class="block w-6 h-0.5 bg-rally-black transition-all duration-300"
          :class="mobileMenuOpen ? 'opacity-0' : ''"
        ></span>
        <span
          class="block w-6 h-0.5 bg-rally-black transition-all duration-300"
          :class="mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''"
        ></span>
      </button>
    </div>

    <!-- Desktop nav bar -->
    <TheNav class="hidden md:block" />

    <!-- Mobile menu overlay -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden bg-rally-black text-white"
      >
        <MobileMenu @close="mobileMenuOpen = false" />
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import TheNav from './TheNav.vue'
import MobileMenu from './MobileMenu.vue'

const scrolled = ref(false)
const isCompactHeader = ref(false)
const mobileMenuOpen = ref(false)
const isMobile = ref(false)

const topBarHeight = computed(() => {
  if (isMobile.value) {
    return isCompactHeader.value ? '60px' : '90px'
  }

  return isCompactHeader.value ? '60px' : '125px'
})

function handleScroll() {
  scrolled.value = window.scrollY > 10
  isCompactHeader.value = window.scrollY > 500
}

function handleResize() {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize, { passive: true })
  handleResize()
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>
