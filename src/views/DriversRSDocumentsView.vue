<template>
  <div>
    <TheHeader />
    <main class="min-h-screen pt-32 md:pt-48 pb-20">
      <div class="max-w-7xl mx-auto px-6 md:px-8">
        <div class="flex flex-wrap items-center gap-4 md:gap-6 mb-6">
          <div
            class="flex items-center justify-center w-28 h-14 md:w-36 md:h-16"
          >
            <img
              src="/assets/cycles/rpp.webp"
              alt="Rajdowy Puchar Południa"
              class="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
        <p
          class="font-display font-bold uppercase tracking-[0.3em] text-rally-yellow text-sm mb-2"
        >
          AMG Rally Karkonosze 2026 - Rally Sprint
        </p>
        <h1
          class="font-display font-black uppercase text-rally-black text-4xl md:text-6xl mb-8"
        >
          Zawodnicy - RS<br />Dokumenty
        </h1>

        <section class="bg-gray-50 border border-gray-200 p-8 md:p-10">
          <h2
            class="font-display font-bold uppercase text-rally-black text-xl md:text-2xl mb-3"
          >
            Regulamin Uzupełniający
          </h2>
          <p class="text-rally-gray mb-6">AMG Rally Karkonosze - RS</p>
          <a
            :href="documentUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center bg-rally-black text-white font-display font-bold uppercase text-sm tracking-wider px-6 py-3 hover:bg-rally-gray transition-colors"
          >
            Otwórz PDF
          </a>
        </section>
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from "../components/layout/TheHeader.vue";
import TheFooter from "../components/layout/TheFooter.vue";

const fileName = "regulamin uzupełniający - RS - AMG Rally Karkonosze.pdf";
const documentUrl = `/assets/files/${encodeURIComponent(fileName)}`;
</script>
