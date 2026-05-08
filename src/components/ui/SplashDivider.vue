<template>
  <!-- SVG splash divider między sekcjami -->
  <div
    class="relative overflow-hidden pointer-events-none"
    :style="{ height: height, background: fromColor }"
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      class="absolute bottom-0 left-0 w-full"
      :style="{ height: height }"
    >
      <!-- Warstwa 1 – dalszy splash -->
      <path
        :d="splashPaths[variant][0]"
        :fill="toColor"
        opacity="0.4"
      />
      <!-- Warstwa 2 – bliższy splash -->
      <path
        :d="splashPaths[variant][1]"
        :fill="toColor"
      />
    </svg>
  </div>
</template>

<script setup>
defineProps({
  fromColor: { type: String, default: '#ffffff' },
  toColor:   { type: String, default: '#F8C800' },
  height:    { type: String, default: '80px' },
  variant:   { type: Number, default: 0 },
})

const splashPaths = [
  // Variant 0: falista kałuża
  [
    'M0,40 C120,80 240,10 360,60 C480,110 600,20 720,55 C840,90 960,15 1080,50 C1200,85 1320,30 1440,60 L1440,100 L0,100 Z',
    'M0,65 C150,20 300,90 450,55 C600,20 750,85 900,50 C1050,15 1200,80 1440,45 L1440,100 L0,100 Z',
  ],
  // Variant 1: bardziej agresywny splash
  [
    'M0,50 C80,0 200,100 350,40 C500,-20 650,90 800,35 C950,-20 1100,80 1250,30 C1340,5 1400,70 1440,50 L1440,100 L0,100 Z',
    'M0,70 C100,30 250,100 400,60 C550,20 700,90 900,55 C1100,20 1300,85 1440,50 L1440,100 L0,100 Z',
  ],
  // Variant 2: delikatniejsze
  [
    'M0,60 C360,20 720,100 1080,60 C1260,40 1380,70 1440,60 L1440,100 L0,100 Z',
    'M0,75 C240,40 480,100 720,70 C960,40 1200,90 1440,65 L1440,100 L0,100 Z',
  ],
]
</script>
