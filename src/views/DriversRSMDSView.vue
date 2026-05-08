<template>
  <div>
    <TheHeader />
    <main class="min-h-screen pt-48 pb-20">
      <div class="max-w-7xl mx-auto px-6 md:px-8">
        <p class="font-display font-bold uppercase tracking-[0.3em] text-rally-yellow text-sm mb-2">RSMDS 2026</p>
        <h1 class="font-display font-black uppercase text-rally-black text-4xl md:text-6xl mb-12">Zawodnicy<br/>RSMDS</h1>
        <div class="bg-gray-50 border border-gray-200 p-12 text-center">
          <p class="font-display font-bold uppercase text-gray-400 tracking-wider">Lista zgłoszeń zostanie opublikowana po zamknięciu zapisów</p>
        </div>
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from '../components/layout/TheHeader.vue'
import TheFooter from '../components/layout/TheFooter.vue'
</script>
