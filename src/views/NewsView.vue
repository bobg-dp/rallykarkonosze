<template>
  <div>
    <TheHeader />
    <main class="min-h-screen pt-48 pb-20">
      <div class="max-w-7xl mx-auto px-6 md:px-8">
        <h1 class="font-display font-black uppercase text-rally-black text-4xl md:text-6xl mb-12">Aktualności</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NewsCard v-for="item in allNews" :key="item.id" :news="item" />
        </div>
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from '../components/layout/TheHeader.vue'
import TheFooter from '../components/layout/TheFooter.vue'
import NewsCard from '../components/ui/NewsCard.vue'

const allNews = [
  { id: 1, title: 'Otwarto zapisy na AMG Rally Karkonosze 2026', excerpt: 'Z przyjemnością informujemy, że ruszyły oficjalne zapisy dla zawodników na pierwszą rundę RSMDS.', date: '5 maja 2026', category: 'Zapisy', url: '/aktualnosci/1' },
  { id: 2, title: 'Trasy i odcinki specjalne – pierwsze informacje', excerpt: 'Organizatorzy ujawnili wstępne plany dotyczące lokalizacji odcinków specjalnych.', date: '28 kwietnia 2026', category: 'Trasy', url: '/aktualnosci/2' },
  { id: 3, title: 'AMG Rally Karkonosze – partnerzy i sponsorzy', excerpt: 'Przedstawiamy grono partnerów, którzy wspierają organizację tegorocznej edycji rajdu.', date: '20 kwietnia 2026', category: 'Partnerzy', url: '/aktualnosci/3' },
]
</script>
