<template>
  <div>
    <TheHeader />
    <main class="min-h-screen pt-32 md:pt-48 pb-20">
      <div class="max-w-4xl mx-auto px-6 md:px-8">
        <!-- Breadcrumb -->
        <nav
          class="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-gray-400 mb-10"
        >
          <RouterLink to="/" class="hover:text-rally-yellow transition-colors"
            >Strona główna</RouterLink
          >
          <span>/</span>
          <RouterLink
            to="/aktualnosci"
            class="hover:text-rally-yellow transition-colors"
            >Aktualności</RouterLink
          >
          <span>/</span>
          <span class="text-rally-black">Zapisy 2026</span>
        </nav>

        <!-- Article header -->
        <div class="mb-10">
          <span
            class="inline-block bg-rally-yellow text-rally-black font-display font-bold uppercase text-xs px-3 py-1 tracking-wider mb-4"
            >Zapisy</span
          >
          <h1
            class="font-display font-black uppercase text-rally-black text-3xl md:text-5xl leading-tight mb-4"
          >
            Otwarto zapisy na AMG Rally Karkonosze 2026
          </h1>
          <time
            class="font-display text-sm uppercase tracking-widest text-gray-400"
            >18 maja 2026</time
          >
        </div>

        <!-- Cover image -->
        <div class="w-full mb-10 overflow-hidden" style="aspect-ratio: 16/7">
          <div
            class="w-full h-full bg-cover bg-center"
            style="background-image: url(/assets/news/news1.webp)"
          ></div>
        </div>

        <!-- Article body -->
        <div
          class="prose-custom max-w-none mb-12 space-y-5 text-rally-gray leading-relaxed text-base md:text-lg"
        >
          <p>
            Z przyjemnością informujemy, że ruszyły oficjalne zapisy dla
            zawodników na pierwszą rundę Rajdowych Samochodowych Mistrzostw
            Dolnego Śląska –
            <strong class="text-rally-black font-bold"
              >AMG Rally Karkonosze 2026</strong
            >. Rajd odbędzie się w dniach
            <strong class="text-rally-black font-bold"
              >13–14 czerwca 2026 roku</strong
            >
            w Jeleniej Górze.
          </p>
          <p>
            Zawodnicy mogą startować w klasach Rajdu Okręgowego (RO) oraz Rally
            Sprint (RS). Zapisy przyjmowane są przez oficjalny system zgłoszeń.
            Biuro Rajdu i Odbiory Administracyjne odbędą się zgodnie z
            harmonogramem opublikowanym na stronie.
          </p>
          <p>Szczegóły i procedura zapisów opisane są w regulaminie.</p>
        </div>

        <!-- CTA buttons -->
        <div class="flex flex-col sm:flex-row gap-4">
          <RouterLink
            to="/zawodnicy-ro/harmonogram"
            class="inline-flex items-center justify-center gap-2 bg-rally-black text-white font-display font-bold uppercase text-sm tracking-wider px-7 py-4 hover:bg-rally-gray transition-colors"
          >
            <svg
              class="w-4 h-4 shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM7 12h5v5H7z"
              />
            </svg>
            Harmonogram RO
          </RouterLink>
          <RouterLink
            to="/zawodnicy-rs/harmonogram"
            class="inline-flex items-center justify-center gap-2 bg-rally-yellow text-rally-black font-display font-bold uppercase text-sm tracking-wider px-7 py-4 hover:brightness-90 transition-all"
          >
            <svg
              class="w-4 h-4 shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM7 12h5v5H7z"
              />
            </svg>
            Harmonogram RS
          </RouterLink>
        </div>
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import TheHeader from "../components/layout/TheHeader.vue";
import TheFooter from "../components/layout/TheFooter.vue";
</script>
