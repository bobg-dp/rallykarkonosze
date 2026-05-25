<template>
  <div>
    <TheHeader />
    <main class="min-h-screen pt-48 pb-20">
      <div class="max-w-7xl mx-auto px-6 md:px-8">
        <h1 class="font-display font-black uppercase text-rally-black text-4xl md:text-6xl mb-12">Dla Kibiców</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          <div class="block p-8 bg-rally-black text-white opacity-70 cursor-not-allowed select-none border border-rally-gray/40">
            <h2 class="font-display font-bold uppercase text-xl mb-2">Mieszkańcy</h2>
            <p class="text-gray-400 text-sm">Informacje o zamknięciach dróg i utrudnieniach</p>
            <p class="mt-2 font-display font-bold uppercase tracking-[0.2em] text-xs text-rally-yellow/90">Materiały w przygotowaniu</p>
          </div>
          <RouterLink to="/kibice/bezpiecznie" class="block p-8 bg-rally-black text-white hover:bg-rally-gray transition-colors group">
            <h2 class="font-display font-bold uppercase text-xl mb-2 group-hover:text-rally-yellow transition-colors">Kibicuj Bezpiecznie</h2>
            <p class="text-gray-400 text-sm">Zasady bezpiecznego oglądania rajdu oraz grafiki informacyjne</p>
          </RouterLink>
          <div class="block p-8 bg-rally-yellow text-rally-black opacity-70 cursor-not-allowed select-none border border-rally-yellow-dark/60">
            <h2 class="font-display font-bold uppercase text-xl mb-2">Sklep</h2>
            <p class="text-rally-black opacity-70 text-sm">Gadżety, koszulki, akcesoria rajdowe</p>
            <p class="mt-2 font-display font-bold uppercase tracking-[0.2em] text-xs text-rally-black/75">Materiały w przygotowaniu</p>
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
