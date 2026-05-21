<template>
  <section
    id="oesy"
    class="relative overflow-hidden bg-[#121212] py-16 md:py-20"
  >
    <div
      class="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(248,200,0,0.18),transparent_58%)]"
      aria-hidden="true"
    ></div>
    <div
      class="absolute -left-20 bottom-12 h-64 w-64 rounded-full bg-rally-yellow/10 blur-3xl"
      aria-hidden="true"
    ></div>

    <div class="relative mx-auto max-w-7xl px-6 md:px-8">
      <div
        class="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
      >
        <div class="max-w-3xl">
          <p
            class="font-display text-sm font-bold uppercase tracking-[0.32em] text-rally-yellow/85"
          >
            Poznaj odcinki specjalne
          </p>
          <h2
            class="mt-3 font-display text-4xl font-black uppercase leading-none text-white md:text-6xl"
          >
            Znane Karkonoskie OS-<span class="lowercase">y</span>
          </h2>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <RouterLink
          v-for="stage in allStages"
          :key="stage.slug"
          :to="stage.path"
          class="group flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-rally-yellow/40 hover:bg-white/[0.06]"
        >
          <div class="flex items-start justify-between gap-3">
            <div>
              <p
                class="font-display text-xs font-bold uppercase tracking-[0.28em] text-rally-yellow/80"
              >
                {{ stage.code }} · {{ stage.dateLabel }}
              </p>
              <h3
                class="mt-3 font-display text-3xl font-black uppercase leading-none text-white"
              >
                {{ stage.name }}
              </h3>
              <p class="mt-2 text-sm text-zinc-400">
                {{ stage.typeLabel }}
              </p>
            </div>

            <div
              class="rounded-full border border-white/10 px-3 py-2 text-right"
            >
              <p
                class="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-400"
              >
                Dystans
              </p>
              <p
                class="font-display text-xl font-black leading-none text-white"
              >
                {{ formatStageDistance(stage.distanceKm) }}
                <span class="text-sm text-zinc-400">km</span>
              </p>
            </div>
          </div>

          <div
            class="mt-6 overflow-hidden rounded-[1.5rem] border border-white/8 bg-black/40 p-3"
          >
            <div class="aspect-[10/7]">
              <StageShapePreview
                :points="stage.shapePoints"
                :aria-label="`Kształt trasy ${stage.headline}`"
              />
            </div>
          </div>

          <p class="mt-5 flex-1 text-sm leading-6 text-zinc-300">
            {{ stage.cardSummary }}
          </p>

          <span
            class="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.22em] text-rally-yellow transition-all duration-200 group-hover:gap-3"
          >
            Przejdź do odcinka
            <svg
              class="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { allStages } from "../../data/stages.js";
import { formatStageDistance } from "../../utils/stageShape.js";
import StageShapePreview from "../ui/StageShapePreview.vue";
</script>
