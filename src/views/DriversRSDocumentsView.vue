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

        <section class="grid gap-6">
          <DocumentDownloadCard
            v-for="document in documents"
            :key="document.fileName"
            :title="document.title"
            :subtitle="document.subtitle"
            :document-url="document.documentUrl"
            :absolute-url="document.absoluteUrl"
          />
        </section>
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from "../components/layout/TheHeader.vue";
import TheFooter from "../components/layout/TheFooter.vue";
import DocumentDownloadCard from "../components/ui/DocumentDownloadCard.vue";
import { SITE_URL } from "../seo/updateSeo.js";

const documents = [
  {
    title: "Regulamin Uzupełniający",
    subtitle: "AMG Rally Karkonosze - RS",
    fileName: "regulamin uzupełniający - RS - AMG Rally Karkonosze.pdf",
  },
  {
    title: "Regulamin RPP 2026",
    subtitle: "Rajdowy Puchar Południa",
    fileName: "regulamin-rpp-2026.pdf",
  },
].map((document) => {
  const documentUrl = `/assets/files/${encodeURIComponent(document.fileName)}`;

  return {
    ...document,
    documentUrl,
    absoluteUrl: new URL(documentUrl, SITE_URL).toString(),
  };
});
</script>
