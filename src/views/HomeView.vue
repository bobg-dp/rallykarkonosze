<template>
  <div>
    <TheHeader />

    <main>
      <!-- Hero – fullscreen -->
      <HeroSection />

      <!-- Aktualności – żółte tło -->
      <SplashDivider from-color="#0D0D0D" to-color="#F8C800" height="80px" :variant="0" />
      <NewsSection />

      <!-- Skróty – ciemne tło -->
      <SplashDivider from-color="#F8C800" to-color="#131414" height="80px" :variant="1" />
      <ShortcutsSection />

      <!-- Partnerzy – białe tło -->
      <SplashDivider from-color="#131414" to-color="#ffffff" height="80px" :variant="2" />
      <PartnersSection />

      <!-- Organizatorzy – czarne tło -->
      <SplashDivider from-color="#ffffff" to-color="#0D0D0D" height="80px" :variant="0" />
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
import SplashDivider from '../components/ui/SplashDivider.vue'
</script>
