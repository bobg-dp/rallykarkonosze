<template>
  <div>
    <TheHeader />
    <main class="min-h-screen pt-48 pb-20">
      <div class="max-w-7xl mx-auto px-6 md:px-8">
        <h1 class="font-display font-black uppercase text-rally-black text-4xl md:text-6xl mb-12">Dla Kibiców</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          <RouterLink to="/kibice/mieszkancy" class="block p-8 bg-rally-black text-white hover:bg-rally-gray transition-colors group">
            <h2 class="font-display font-bold uppercase text-xl mb-2 group-hover:text-rally-yellow transition-colors">Mieszkańcy</h2>
            <p class="text-gray-400 text-sm">Informacje o zamknięciach dróg i utrudnieniach</p>
          </RouterLink>
          <RouterLink to="/kibice/bezpiecznie" class="block p-8 bg-rally-black text-white hover:bg-rally-gray transition-colors group">
            <h2 class="font-display font-bold uppercase text-xl mb-2 group-hover:text-rally-yellow transition-colors">Kibicuj Bezpiecznie</h2>
            <p class="text-gray-400 text-sm">Zasady bezpiecznego oglądania rajdu oraz grafiki informacyjne</p>
          </RouterLink>
          <RouterLink to="/kibice/sklep" class="block p-8 bg-rally-yellow text-rally-black hover:bg-rally-yellow-dark transition-colors group">
            <h2 class="font-display font-bold uppercase text-xl mb-2">Sklep</h2>
            <p class="text-rally-black opacity-70 text-sm">Gadżety, koszulki, akcesoria rajdowe</p>
          </RouterLink>
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
