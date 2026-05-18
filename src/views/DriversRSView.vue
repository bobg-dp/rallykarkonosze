<template>
  <div>
    <TheHeader />
    <main class="min-h-screen pt-32 md:pt-48 pb-20">
      <div class="max-w-7xl mx-auto px-6 md:px-8">
              <div class="flex flex-wrap items-center gap-4 md:gap-6 mb-6">
          <div class="flex items-center justify-center w-28 h-14 md:w-36 md:h-16">
            <img
              src="/assets/cycles/rpp.webp"
              alt="Rajdowy Puchar Południa"
              class="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
        <p class="font-display font-bold uppercase tracking-[0.3em] text-rally-yellow text-sm mb-2">AMG Rally Karkonosze 2026 - Rally Sprint</p>
        <h1 class="font-display font-black uppercase text-rally-black text-4xl md:text-6xl mb-12">Zawodnicy - RS</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          <RouterLink to="/zawodnicy-rs/dokumenty" class="block p-8 bg-rally-black text-white hover:bg-rally-gray transition-colors group">
            <h2 class="font-display font-bold uppercase text-xl mb-2 group-hover:text-rally-yellow transition-colors">Dokumenty</h2>
            <p class="text-gray-400 text-sm">Regulamin uzupełniający i inne dokumenty rajdu</p>
          </RouterLink>
          <RouterLink to="/zawodnicy-rs/harmonogram" class="block p-8 bg-rally-black text-white hover:bg-rally-gray transition-colors group">
            <h2 class="font-display font-bold uppercase text-xl mb-2 group-hover:text-rally-yellow transition-colors">Harmonogram</h2>
            <p class="text-gray-400 text-sm">Szczegółowy plan wydarzeń i terminarz rajdu</p>
          </RouterLink>
          <div class="block p-8 bg-rally-black opacity-40 cursor-not-allowed select-none">
            <h2 class="font-display font-bold uppercase text-xl text-white mb-2">Elektroniczna Tablica Ogłoszeń</h2>
            <p class="text-gray-400 text-sm">Komunikaty i ogłoszenia organizatora</p>
          </div>
          <div class="block p-8 bg-rally-black opacity-40 cursor-not-allowed select-none">
            <h2 class="font-display font-bold uppercase text-xl text-white mb-2">Lista Startowa</h2>
            <p class="text-gray-400 text-sm">Lista zgłoszeń zostanie opublikowana po zamknięciu zapisów</p>
          </div>
          <RouterLink to="/lokalizacje" class="block p-8 bg-rally-black text-white hover:bg-rally-gray transition-colors group">
            <h2 class="font-display font-bold uppercase text-xl mb-2 group-hover:text-rally-yellow transition-colors">Lokalizacje</h2>
            <p class="text-gray-400 text-sm">Mapa i nawigacja do wszystkich lokalizacji rajdu</p>
          </RouterLink>
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
