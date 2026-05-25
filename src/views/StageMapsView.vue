<template>
  <div>
    <TheHeader />

    <main class="min-h-screen bg-rally-black pt-14 md:pt-16">
      <StageCardsSection />
    </main>

    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from '../components/layout/TheHeader.vue'
import TheFooter from '../components/layout/TheFooter.vue'
import StageCardsSection from '../components/sections/StageCardsSection.vue'
</script>