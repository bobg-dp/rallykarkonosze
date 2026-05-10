<template>
  <div>
    <TheHeader />
    <main class="min-h-screen pt-48 pb-20 bg-white">
      <div class="max-w-6xl mx-auto px-6 md:px-8">
        <p class="font-display font-bold uppercase tracking-[0.3em] text-rally-yellow text-sm mb-2">Kibice</p>
        <h1 class="font-display font-black uppercase text-rally-black text-4xl md:text-6xl mb-8">Kibicuj Bezpiecznie</h1>

        <div class="bg-rally-black text-white p-8 md:p-12 mb-10 shadow-xl">
          <p class="text-base md:text-lg leading-relaxed mb-5">
            Rajd to sport pelen emocji i nieprzewidywalnych sytuacji. Bezpieczenstwo zawodnikow, kibicow i sluzb zabezpieczenia zawsze pozostaje najwazniejsze.
          </p>
          <p class="text-base md:text-lg leading-relaxed mb-8">
            Podczas AMG Rally Karkonosze ogladaj odcinki specjalne wylacznie z wyznaczonych stref kibica i stosuj sie do polecen organizatora oraz sluzb porzadkowych.
          </p>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            <section>
              <h2 class="font-display font-black uppercase text-rally-yellow text-2xl md:text-3xl mb-4">Pamietaj</h2>
              <ul class="space-y-3 text-sm md:text-base leading-relaxed">
                <li class="flex gap-3"><span class="text-rally-yellow font-bold">✅</span><span>Wybieraj tylko oznaczone miejsca dla kibicow</span></li>
                <li class="flex gap-3"><span class="text-rally-yellow font-bold">✅</span><span>Stosuj sie do polecen sedziow i sluzb zabezpieczenia</span></li>
                <li class="flex gap-3"><span class="text-rally-yellow font-bold">✅</span><span>Zachowaj szczegolna ostroznosc przy trasie rajdu</span></li>
                <li class="flex gap-3"><span class="text-rally-yellow font-bold">✅</span><span>Dzieci trzymaj zawsze pod opieka</span></li>
                <li class="flex gap-3"><span class="text-rally-yellow font-bold">✅</span><span>Zwierzęta trzymaj pod pelna kontrola</span></li>
              </ul>
            </section>

            <section>
              <h2 class="font-display font-black uppercase text-white text-2xl md:text-3xl mb-4">Nigdy nie stawaj</h2>
              <ul class="space-y-3 text-sm md:text-base leading-relaxed text-gray-200">
                <li class="flex gap-3"><span class="text-red-400 font-bold">❌</span><span>Na zewnetrznej stronie zakretow</span></li>
                <li class="flex gap-3"><span class="text-red-400 font-bold">❌</span><span>Na wyjsciach z zakretow</span></li>
                <li class="flex gap-3"><span class="text-red-400 font-bold">❌</span><span>Ponizej poziomu drogi</span></li>
                <li class="flex gap-3"><span class="text-red-400 font-bold">❌</span><span>W miejscach oznaczonych jako niebezpieczne</span></li>
                <li class="flex gap-3"><span class="text-red-400 font-bold">❌</span><span>Na trasie odcinka specjalnego</span></li>
              </ul>
            </section>
          </div>

          <p class="mt-8 font-display font-bold uppercase tracking-wider text-rally-yellow text-sm md:text-base">
            Samochod rajdowy moze opuscic droge w kazdej chwili.
          </p>
        </div>

        <section>
          <div class="flex items-end justify-between gap-4 mb-6">
            <div>
              <p class="font-display font-bold uppercase tracking-[0.25em] text-rally-yellow text-xs mb-1">Galeria</p>
              <h2 class="font-display font-black uppercase text-rally-black text-2xl md:text-4xl">Grafiki dla kibicow</h2>
            </div>
            <p class="text-sm text-gray-500">Kliknij, aby powiekszyc</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              v-for="image in gallery"
              :key="image.src"
              type="button"
              class="group relative overflow-hidden bg-rally-black text-left"
              @click="openModal(image)"
            >
              <img :src="image.src" :alt="image.alt" class="block w-full h-auto transition-transform duration-300 group-hover:scale-[1.01]" />
              <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-4 py-4">
                <p class="font-display font-bold uppercase tracking-[0.2em] text-white text-xs md:text-sm">{{ image.label }}</p>
              </div>
            </button>
          </div>
        </section>
      </div>
    </main>
    <TheFooter />

    <Teleport to="body">
      <div
        v-if="selectedImage"
        class="fixed inset-0 z-[140] flex items-center justify-center bg-black/90 p-4 md:p-8"
        @click.self="closeModal"
      >
        <button
          type="button"
          class="absolute top-4 right-4 rounded-full border border-white/20 bg-black/50 px-3 py-2 text-white text-sm backdrop-blur-sm hover:bg-black/70"
          @click="closeModal"
          aria-label="Zamknij podglad"
        >
          Zamknij
        </button>
        <img :src="selectedImage.src" :alt="selectedImage.alt" class="max-w-full max-h-full object-contain shadow-2xl" />
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import TheHeader from '../components/layout/TheHeader.vue'
import TheFooter from '../components/layout/TheFooter.vue'

const gallery = [
  {
    src: '/assets/docs/kibice.jpeg',
    alt: 'Grafika bezpieczenstwa dla kibicow 1',
    label: 'Grafika 1',
  },
  {
    src: '/assets/docs/kibice2.jpeg',
    alt: 'Grafika bezpieczenstwa dla kibicow 2',
    label: 'Grafika 2',
  },
]

const selectedImage = ref(null)

function openModal(image) {
  selectedImage.value = image
}

function closeModal() {
  selectedImage.value = null
}

function handleKeydown(event) {
  if (event.key === 'Escape') {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>