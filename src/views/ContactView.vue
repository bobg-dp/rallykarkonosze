<template>
  <div>
    <TheHeader />
    <main class="min-h-screen pt-48 pb-20">
      <div class="max-w-4xl mx-auto px-6 md:px-8">
        <h1 class="font-display font-black uppercase text-rally-black text-4xl md:text-6xl mb-12">Kontakt</h1>
        <div class="max-w-xl">
          <div>
            <h2 class="font-display font-bold uppercase text-xl mb-6">Organizator</h2>
            <address class="not-italic space-y-2 text-gray-700">
              <p class="font-semibold">Automobilklub Karkonosze</p>
              <p>Jelenia Góra</p>
              <p><a href="mailto:biuro@rallykarkonosze.pl" class="text-rally-yellow hover:underline">biuro@rallykarkonosze.pl</a></p>
            </address>
          </div>
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
