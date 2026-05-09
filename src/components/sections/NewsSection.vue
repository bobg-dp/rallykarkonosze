<template>
  <section id="aktualnosci" class="bg-rally-yellow py-16 md:py-20">
    <div class="max-w-7xl mx-auto px-6 md:px-8">
      <!-- Nagłówek sekcji -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <p class="font-display font-bold uppercase tracking-[0.3em] text-rally-black opacity-60 text-sm mb-1">Co słychać</p>
          <h2 class="font-display font-black uppercase text-rally-black text-4xl md:text-6xl leading-none">
            Aktualności
          </h2>
        </div>
        <RouterLink
          to="/aktualnosci"
          class="shrink-0 font-display font-bold uppercase tracking-wider text-sm bg-rally-black text-white px-6 py-3 hover:bg-rally-gray transition-colors duration-200 self-start md:self-auto"
        >
          Zobacz wszystkie
        </RouterLink>
      </div>

      <!-- Grid newsów -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NewsCard v-for="item in latestNews" :key="item.id" :news="item" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import NewsCard from '../ui/NewsCard.vue'

const latestNews = [
  {
    id: 1,
    title: 'Otwarto zapisy na AMG Rally Karkonosze 2026',
    excerpt: 'Z przyjemnością informujemy, że ruszyły oficjalne zapisy dla zawodników na pierwszą rundę Rajdowych Samochodowych Mistrzostw Dolnego Śląska.',
    date: '5 maja 2026',
    category: 'Zapisy',
    url: '/aktualnosci/1',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767c2e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Trasy i odcinki specjalne – pierwsze informacje',
    excerpt: 'Organizatorzy ujawnili wstępne plany dotyczące lokalizacji odcinków specjalnych w Kotlinie Jeleniogórskiej i okolicach.',
    date: '28 kwietnia 2026',
    category: 'Trasy',
    url: '/aktualnosci/2',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'AMG Rally Karkonosze – partnerzy i sponsorzy',
    excerpt: 'Przedstawiamy grono partnerów, którzy wspierają organizację tegorocznej edycji rajdu w Jeleniej Górze.',
    date: '20 kwietnia 2026',
    category: 'Partnerzy',
    url: '/aktualnosci/3',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
  },
]
</script>
