<template>
  <section class="bg-white py-16 md:py-20">
    <div class="max-w-7xl mx-auto px-6 md:px-8">
      <div class="text-center mb-12">
        <p class="font-display font-bold uppercase tracking-[0.3em] text-rally-yellow opacity-80 text-sm mb-1">Współpraca</p>
        <h2 class="font-display font-black uppercase text-rally-black text-4xl md:text-6xl leading-none">
          Partnerzy
        </h2>
      </div>

      <!-- Sponsor tytularny -->
      <div class="border-2 border-rally-yellow p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center gap-8">
        <!-- Logo placeholder -->
        <div class="shrink-0 w-48 h-32 bg-gray-100 flex items-center justify-center border border-gray-200">
          <span class="font-display font-bold uppercase text-gray-400 text-sm tracking-wider text-center px-4">Logo<br/>Sponsor<br/>Tytularny</span>
        </div>
        <!-- Tekst -->
        <div>
          <p class="font-display font-bold uppercase tracking-widest text-rally-yellow text-xs mb-2">Sponsor Tytularny</p>
          <h3 class="font-display font-black uppercase text-rally-black text-2xl md:text-3xl mb-4">AMG – Tytuł rajdu</h3>
          <p class="text-gray-600 leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      <!-- Partnerzy główni -->
      <div class="mb-4">
        <h3 class="font-display font-bold uppercase tracking-widest text-rally-black text-sm mb-6 text-center opacity-50">Partnerzy główni</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <PartnerLogo v-for="i in 4" :key="`main-${i}`" label="Partner główny" />
        </div>
      </div>

      <!-- Partnerzy -->
      <div class="mb-4">
        <h3 class="font-display font-bold uppercase tracking-widest text-rally-black text-sm mb-6 text-center opacity-50">Partnerzy</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <PartnerLogo v-for="i in 4" :key="`partner-${i}`" label="Partner" />
        </div>
      </div>

      <!-- Patroni medialni -->
      <div>
        <h3 class="font-display font-bold uppercase tracking-widest text-rally-black text-sm mb-6 text-center opacity-50">Patroni medialni</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <PartnerLogo v-for="i in 4" :key="`media-${i}`" label="Patron medialny" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PartnerLogo from '../ui/PartnerLogo.vue'
</script>
