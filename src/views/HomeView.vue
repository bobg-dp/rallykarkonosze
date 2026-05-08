<template>
  <div>
    <TheHeader />

    <main>
      <!-- Hero – fullscreen -->
      <HeroSection />

      <NewsSection />
      <ShortcutsSection />
      <PartnersSection />
      <OrganizersSection />
    </main>

    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from '../components/layout/TheHeader.vue'
import TheFooter from '../components/layout/TheFooter.vue'
import HeroSection from '../components/sections/HeroSection.vue'
import NewsSection from '../components/sections/NewsSection.vue'
import ShortcutsSection from '../components/sections/ShortcutsSection.vue'
import PartnersSection from '../components/sections/PartnersSection.vue'
import OrganizersSection from '../components/sections/OrganizersSection.vue'
</script>
