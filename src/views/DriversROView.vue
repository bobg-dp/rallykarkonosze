<template>
  <div>
    <TheHeader />
    <main class="min-h-screen pt-32 md:pt-48 pb-20">
      <div class="max-w-7xl mx-auto px-6 md:px-8">
        <div class="flex flex-wrap items-center gap-4 md:gap-6 mb-6">
          <div class="flex items-center justify-center w-28 h-14 md:w-36 md:h-16">
            <img
              src="/assets/cycles/rsmds.webp"
              alt="Rajdowe Samochodowe Mistrzostwa Dolnego Śląska"
              class="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>
          <div class="flex items-center justify-center w-28 h-14 md:w-36 md:h-16">
            <img
              src="/assets/cycles/rmp-white.webp"
              alt="Rajdowe Mistrzostwa Południa"
              class="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
        <p class="font-display font-bold uppercase tracking-[0.3em] text-rally-yellow text-sm mb-2">AMG Rally Karkonosze 2026 - Rajd Okręgowy</p>
        <h1 class="font-display font-black uppercase text-rally-black text-4xl md:text-6xl mb-12">Zawodnicy - RO</h1>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <RouterLink to="/zawodnicy-ro/tablica" class="block p-8 bg-rally-yellow text-rally-black hover:bg-rally-yellow-dark transition-colors group">
            <h2 class="font-display font-bold uppercase text-xl mb-2">Elektroniczna Tablica Ogłoszeń</h2>
            <p class="text-rally-black/75 text-sm">Komunikaty, publikacje i dokumenty pobierane na żywo z tablicy ogłoszeń</p>
          </RouterLink>
          <RouterLink to="/zawodnicy-ro/harmonogram" class="block p-8 bg-rally-black text-white hover:bg-rally-gray transition-colors group">
            <h2 class="font-display font-bold uppercase text-xl mb-2 group-hover:text-rally-yellow transition-colors">Harmonogram</h2>
            <p class="text-gray-400 text-sm">Szczegółowy plan wydarzeń i terminarz rajdu</p>
          </RouterLink>
          <RouterLink to="/mapy" class="block p-8 bg-rally-black text-white hover:bg-rally-gray transition-colors group">
            <h2 class="font-display font-bold uppercase text-xl mb-2 group-hover:text-rally-yellow transition-colors">Mapy</h2>
            <p class="text-gray-400 text-sm">Onboardy, przebieg odcinków specjalnych i najważniejsze informacje o OS-ach</p>
          </RouterLink>
          <RouterLink to="/zawodnicy-ro/dokumenty" class="block p-8 bg-rally-black text-white hover:bg-rally-gray transition-colors group">
            <h2 class="font-display font-bold uppercase text-xl mb-2 group-hover:text-rally-yellow transition-colors">Dokumenty</h2>
            <p class="text-gray-400 text-sm">Regulamin uzupełniający i inne dokumenty rajdu</p>
          </RouterLink>
          <RouterLink to="/lokalizacje" class="block p-8 bg-rally-black text-white hover:bg-rally-gray transition-colors group">
            <h2 class="font-display font-bold uppercase text-xl mb-2 group-hover:text-rally-yellow transition-colors">Lokalizacje</h2>
            <p class="text-gray-400 text-sm">Mapa i nawigacja do wszystkich lokalizacji rajdu</p>
          </RouterLink>
          <div class="block p-8 bg-rally-black opacity-40 cursor-not-allowed select-none">
            <h2 class="font-display font-bold uppercase text-xl text-white mb-2">Lista Startowa</h2>
            <p class="text-gray-400 text-sm">Lista zgłoszeń zostanie opublikowana po zamknięciu zapisów</p>
          </div>
        </div>
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import TheHeader from '../components/layout/TheHeader.vue'
import TheFooter from '../components/layout/TheFooter.vue'
</script>
