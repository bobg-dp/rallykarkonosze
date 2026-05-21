<template>
  <div>
    <TheHeader />

    <main class="min-h-screen bg-[#f4f1e8] pt-32 pb-20 md:pt-44">
      <div class="mx-auto max-w-7xl px-6 md:px-8" v-if="stage">
        <p
          class="font-display text-sm font-bold uppercase tracking-[0.3em] text-rally-yellow-dark"
        >
          AMG Rally Karkonosze 2026
        </p>

        <div
          class="mt-4 grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start"
        >
          <div>
            <p
              class="font-display text-sm font-bold uppercase tracking-[0.28em] text-zinc-500"
            >
              {{ stage.typeLabel }}
            </p>
            <h1
              class="mt-3 font-display text-5xl font-black uppercase leading-none text-rally-black md:text-7xl"
            >
              {{ stage.headline }}
            </h1>
            <p class="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
              Interaktywny podgląd przebiegu trasy przygotowany na podstawie
              mapy KML organizatora i osadzony na tle OpenStreetMap. To szybki
              punkt wejścia dla kibiców i zawodników przed wyjazdem na oes.
            </p>

            <div class="mt-8 grid gap-4 sm:grid-cols-3">
              <article
                class="rounded-[1.6rem] border border-black/8 bg-white/80 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >
                <p
                  class="font-display text-xs font-bold uppercase tracking-[0.24em] text-zinc-400"
                >
                  Termin
                </p>
                <p
                  class="mt-3 font-display text-2xl font-black uppercase text-rally-black"
                >
                  {{ stage.dateLabel }}
                </p>
              </article>

              <article
                class="rounded-[1.6rem] border border-black/8 bg-white/80 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >
                <p
                  class="font-display text-xs font-bold uppercase tracking-[0.24em] text-zinc-400"
                >
                  Dystans
                </p>
                <p
                  class="mt-3 font-display text-2xl font-black uppercase text-rally-black"
                >
                  {{ formatStageDistance(stage.distanceKm) }} km
                </p>
              </article>

              <article
                class="rounded-[1.6rem] border border-black/8 bg-white/80 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >
                <p
                  class="font-display text-xs font-bold uppercase tracking-[0.24em] text-zinc-400"
                >
                  Oznaczenie
                </p>
                <p
                  class="mt-3 font-display text-2xl font-black uppercase text-rally-black"
                >
                  {{ stage.code }}
                </p>
              </article>
            </div>

            <div class="mt-8 flex flex-wrap gap-3">
              <a
                :href="stage.startMapsUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-full bg-rally-black px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-rally-gray"
              >
                Nawiguj do startu
              </a>
              <a
                :href="stage.finishMapsUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-full border border-rally-black/15 bg-white px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.2em] text-rally-black transition-all hover:border-rally-black/30"
              >
                Nawiguj do mety
              </a>
              <RouterLink
                to="/#oesy"
                class="inline-flex items-center gap-2 rounded-full border border-rally-black/15 px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.2em] text-rally-black transition-all hover:border-rally-black/30"
              >
                Wszystkie odcinki
              </RouterLink>
            </div>
          </div>

          <div
            class="rounded-[2rem] bg-[#111111] p-5 shadow-[0_28px_100px_rgba(0,0,0,0.18)] md:p-7"
          >
            <StageRouteMap :key="stage.slug" :stage="stage" />

            <p class="mt-5 text-sm leading-6 text-zinc-300">
              Żółty marker oznacza start, jasny marker metę. Możesz przybliżać
              mapę i przesuwać widok, aby sprawdzić przebieg odcinka.
            </p>
          </div>
        </div>
      </div>

      <div v-else class="mx-auto max-w-4xl px-6 md:px-8">
        <p
          class="font-display text-sm font-bold uppercase tracking-[0.3em] text-rally-yellow-dark"
        >
          AMG Rally Karkonosze 2026
        </p>
        <h1
          class="mt-4 font-display text-5xl font-black uppercase leading-none text-rally-black md:text-6xl"
        >
          Nie znaleziono odcinka
        </h1>
        <p class="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
          Ten adres nie prowadzi do opublikowanej strony trasy. Wróć na stronę
          główną, aby zobaczyć dostępne odcinki.
        </p>
        <RouterLink
          to="/#oesy"
          class="mt-8 inline-flex items-center gap-2 rounded-full bg-rally-black px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.2em] text-white"
        >
          Przejdź do odcinków
        </RouterLink>
      </div>
    </main>

    <TheFooter />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import TheHeader from "../components/layout/TheHeader.vue";
import TheFooter from "../components/layout/TheFooter.vue";
import StageRouteMap from "../components/ui/StageRouteMap.vue";
import { getStageBySlug } from "../data/stages.js";
import { formatStageDistance } from "../utils/stageShape.js";

const route = useRoute();

const stage = computed(() => getStageBySlug(route.params.slug));
</script>
