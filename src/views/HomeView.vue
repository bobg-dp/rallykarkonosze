<template>
  <div>
    <TheHeader />

    <main>
      <div class="relative">
        <!-- Hero – fullscreen -->
        <HeroSection />

        <!-- Przejście Hero -> Aktualności -->
        <div class="pointer-events-none absolute left-0 right-0 bottom-0 z-30 overflow-hidden bg-rally-black-deep bg-transparent bg-blend-multiply">
          <img
            src="/splash.png"
            alt=""
            aria-hidden="true"
            class="block w-full h-auto"
          />
        </div>
      </div>

      <NewsSection />

      <!-- Przejście Aktualności -> Skróty -->
      <div class="relative z-10 -my-px overflow-hidden bg-rally-black">
        <img
          src="/splash.png"
          alt=""
          aria-hidden="true"
          class="block w-full h-auto rotate-180"
        />
      </div>

      <ShortcutsSection />
      <DirectorMessageSection />
      <FansInfoSection />
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
import DirectorMessageSection from '../components/sections/DirectorMessageSection.vue'
import FansInfoSection from '../components/sections/FansInfoSection.vue'
import NewsSection from '../components/sections/NewsSection.vue'
import ShortcutsSection from '../components/sections/ShortcutsSection.vue'
import PartnersSection from '../components/sections/PartnersSection.vue'
import OrganizersSection from '../components/sections/OrganizersSection.vue'
</script>
