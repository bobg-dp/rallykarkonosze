<template>
  <section class="bg-rally-black py-16 md:py-20">
    <div class="max-w-7xl mx-auto px-6 md:px-8">
      <div class="text-center mb-12">
        <p class="font-display font-bold uppercase tracking-[0.3em] text-rally-yellow opacity-70 text-sm mb-1">Szybkie linki</p>
        <h2 class="font-display font-black uppercase text-white text-4xl md:text-6xl leading-none">
          Dla Ciebie
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <ShortcutCard
          v-for="item in shortcuts"
          :key="item.label"
          :item="item"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ShortcutCard from '../ui/ShortcutCard.vue'

const shortcuts = [
  {
    label: 'Zawodnicy RO',
    desc: 'Listy zgłoszeń, wyniki i klasyfikacje Rajdu Okręgowego',
    to: '/zawodnicy-ro',
    logos: [
      {
        src: '/assets/cycles/rsmds.webp',
        alt: 'Rajdowe Samochodowe Mistrzostwa Dolnego Śląska',
      },
      {
        src: '/assets/cycles/rmp-white.webp',
        alt: 'Rajdowe Mistrzostwa Południa',
      },
    ],
  },
  {
    label: 'Zawodnicy RS',
    desc: 'Listy zgłoszeń, wyniki i klasyfikacje Rally Sprint',
    to: '/zawodnicy-rs',
    logos: [
      {
        src: '/assets/cycles/rpp-transparent.webp',
        alt: 'Rajdowy Puchar Południa',
      },
    ],
  },
  {
    label: 'Dla kibiców',
    desc: 'Gdzie oglądać, strefy kibica, bezpieczeństwo',
    to: '/kibice',
    icon: 'flag',
  },
  {
    label: 'Dla mieszkańców',
    desc: 'Zamknięcia dróg, harmonogram, informacje',
    to: '/kibice/mieszkancy',
    icon: 'map-pin',
  },
  {
    label: 'Program rajdu',
    desc: 'Harmonogram, godziny startów, ceremonie',
    to: '/program',
    icon: 'calendar',
  },
  {
    label: 'Mapy i odcinki',
    desc: 'Trasy OS, mapy dojazdowe, parki serwisowe',
    to: '/mapy',
    icon: 'map',
  },
]
</script>
