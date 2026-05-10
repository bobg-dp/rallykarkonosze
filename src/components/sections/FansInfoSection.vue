<template>
  <section class="bg-black py-6 md:py-10">
    <div class="w-full xl:max-w-6xl xl:mx-auto">
      <button
        type="button"
        class="group relative block w-full overflow-hidden bg-rally-black text-left"
        @click="isOpen = true"
        aria-label="Powiększ grafikę dla kibiców"
      >
        <img
          src="/assets/docs/kibice.jpeg"
          alt="Informacje dla kibiców"
          class="block w-full h-auto transition-transform duration-300 ease-out group-hover:scale-[1.01]"
        />

        <div
          class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-4 py-4 md:px-6 md:py-5"
        >
          <div class="flex items-end justify-between gap-4">
            <div>
              <p
                class="font-display font-bold uppercase tracking-[0.25em] text-rally-yellow text-[11px] md:text-xs"
              >
                Dla kibiców
              </p>
              <p
                class="font-display font-black uppercase text-white text-lg md:text-2xl leading-none mt-1"
              >
                Kliknij, aby powiększyć
              </p>
            </div>
            <span
              class="shrink-0 rounded-full border border-white/25 bg-black/45 px-3 py-2 text-white text-xs md:text-sm backdrop-blur-sm transition-transform duration-300 group-hover:scale-105"
            >
              Zoom
            </span>
          </div>
        </div>
      </button>
    </div>

    <Teleport to="body">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[120] flex items-center justify-center bg-black/88 p-4 md:p-8"
        @click.self="closeModal"
      >
        <button
          type="button"
          class="absolute top-4 right-4 rounded-full border border-white/20 bg-black/50 px-3 py-2 text-white text-sm backdrop-blur-sm hover:bg-black/70"
          @click="closeModal"
          aria-label="Zamknij podgląd"
        >
          Zamknij
        </button>

        <img
          src="/assets/docs/kibice.jpeg"
          alt="Informacje dla kibiców"
          class="max-w-full max-h-full object-contain shadow-2xl"
        />
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}

function handleKeydown(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>
