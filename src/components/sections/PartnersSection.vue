<template>
  <section class="bg-white py-16 md:py-20">
    <div class="max-w-7xl mx-auto px-6 md:px-8">
      <div class="text-center mb-12">
        <p class="font-display font-bold uppercase tracking-[0.3em] text-rally-yellow opacity-80 text-sm mb-1">Współpraca</p>
        <h2 class="font-display font-black uppercase text-rally-black text-4xl md:text-6xl leading-none">
          Wspierają nas
        </h2>
      </div>

      <!-- Sponsor tytularny -->
      <div class="border-2 border-rally-yellow p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center gap-8">
        <!-- Logo sponsora tytularnego -->
        <div class="shrink-0 w-56 h-36 bg-rally-gray flex items-center justify-center border border-rally-black rounded-sm p-4 shadow-md">
          <img
            src="/assets/sponsors/amg.png"
            alt="AMG - Generalny wykonawca inwestycji"
            class="max-w-full max-h-full object-contain"
            loading="lazy"
          />
        </div>
        <!-- Tekst -->
        <div>
          <p class="font-display font-bold uppercase tracking-widest text-rally-yellow text-xs mb-2">Sponsor Tytularny</p>
          <h3 class="font-display font-black uppercase text-rally-black text-2xl md:text-3xl mb-4">AMG - Sponsor Tytularny</h3>
          <p class="text-gray-600 leading-relaxed text-sm md:text-base">
            <span class="font-bold text-lg">Witam</span>  <br/>
            AMG to nie tylko generalny wykonawca inwestycji ale również transport wypożyczalnia autolawet, busów, aut i maszyn budowlanych. Dlaczego wspieram rajd? Moją pasją zawsze był motorsport, sam jestem kierowcą rajdowym 😊, ale tak naprawdę moim planem jest wspierać młodych ambitnych zawodników, którzy mają talent i ambicje by startować i wygrywać w rajdach, ale często ogranicza ich brak budżetu bo to nie tani sport. <br/>
            Wspieram rajd dlatego że Karkonosze cały czas stały rajdami i świetnie,że mogę być częścią tego projektu i zapisać się w kartach historii motosportu jako osoba która pomogła w reaktywowaniu Rajdu Karkonoskiego. <br/>
            <br/>
          </p>
          <p class="text-rally-black leading-relaxed text-base md:text-lg text-right font-display font-bold italic">Pozdrawiam Gracjan Niemczyk</p>
        </div>
      </div>

      <!-- Partnerzy główni -->
      <div class="mb-4">
        <h3 class="font-display font-bold uppercase tracking-widest text-rally-black text-sm mb-6 text-center opacity-50">Partnerzy główni</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          <PartnerLogo v-for="item in mainPartners" :key="item.name" :label="item.name" :logo="item.logo" />
        </div>
      </div>

      <!-- Partnerzy -->
      <div class="mb-4">
        <h3 class="font-display font-bold uppercase tracking-widest text-rally-black text-sm mb-6 text-center opacity-50">Partnerzy</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          <PartnerLogo v-for="item in partners" :key="item.name" :label="item.name" :logo="item.logo" />
        </div>
      </div>

      <!-- Gminy partnerskie -->
      <div class="mb-4">
        <h3 class="font-display font-bold uppercase tracking-widest text-rally-black text-sm mb-6 text-center opacity-50">Gminy partnerskie</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          <PartnerLogo v-for="item in municipalPartners" :key="item.name" :label="item.name" :logo="item.logo" />
        </div>
      </div>

      <!-- Patroni medialni -->
      <div>
        <h3 class="font-display font-bold uppercase tracking-widest text-rally-black text-sm mb-6 text-center opacity-50">Patroni medialni</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <PartnerLogo v-for="item in mediaPatrons" :key="item.name" :label="item.name" :logo="item.logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PartnerLogo from '../ui/PartnerLogo.vue'

const mainPartners = [
  { name: 'Divemed', logo: '/assets/sponsors/gold/divemed.png' },
  { name: 'Logo patron', logo: '/assets/sponsors/gold/logo-patron.png' },
  { name: 'Ultima', logo: '/assets/sponsors/gold/ultima_logo.svg' },
]

const partners = [
  { name: 'Logo Prosiak', logo: '/assets/sponsors/rest/LogoProsiak.png' },
  { name: 'Logo Z napisem od Piotra Rogaty', logo: '/assets/sponsors/rest/LogoZnapisemodPiotraRogaty2.png' },
  { name: 'Divemed Apartamenty', logo: '/assets/sponsors/rest/divemed-apartamenty.png' },
  { name: 'Divemend Garage', logo: '/assets/sponsors/rest/divemend-garage.png' },
  { name: 'Osada Śnieżka', logo: '/assets/sponsors/rest/logo-osada-sniezka-color.svg' },
  { name: 'Rally Devil', logo: '/assets/sponsors/rest/rallydevil.webp' },
  { name: 'Rozkręcamy', logo: '/assets/sponsors/rest/rozkrecamy.png' },
]

const municipalPartners = [
  { name: 'Gmina 1', logo: '/assets/gminy/Jelenia_Gora_logo.jpg' },
  { name: 'Gmina 2', logo: '/assets/gminy/Jelenia_Gora_logo.jpg' },
  { name: 'Gmina 3', logo: '/assets/gminy/Jelenia_Gora_logo.jpg' },
  { name: 'Gmina 4', logo: '/assets/gminy/Jelenia_Gora_logo.jpg' },
]

const mediaPatrons = [
  { name: 'Kalendarz motoryzacyjny', logo: '/assets/sponsors/media/kalendarz-motoryzacyjny.png' },
]
</script>
