<template>
  <!--
    Splash divider – efekt rozbryzgu cieczy między sekcjami.
    fromColor = kolor sekcji POWYŻEJ (tło diva)
    toColor   = kolor sekcji PONIŻEJ (kolor "cieczy" strzelającej w górę)
    Budowa:
      1. główna masa cieczy (body) – wypełnia dolną część
      2. palce/strumienie (fingers) – strzelają w górę z masy
      3. unoszące się krople (drops) – elipsy między palcami
  -->
  <div
    class="relative pointer-events-none overflow-hidden"
    :style="{ height: height, background: fromColor }"
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 1440 300"
      preserveAspectRatio="none"
      class="absolute inset-0 w-full h-full"
    >
      <!-- Główna masa -->
      <path :d="v.body" :fill="toColor" />

      <!-- Palce / strumienie -->
      <path
        v-for="(f, i) in v.fingers"
        :key="`f${i}`"
        :d="f"
        :fill="toColor"
      />

      <!-- Krople -->
      <ellipse
        v-for="(d, i) in v.drops"
        :key="`d${i}`"
        :cx="d.cx" :cy="d.cy"
        :rx="d.rx" :ry="d.ry"
        :fill="toColor"
      />
    </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  fromColor: { type: String, default: '#131414' },
  toColor:   { type: String, default: '#F8C800' },
  height:    { type: String, default: '200px' },
  variant:   { type: Number, default: 0 },
})

/*
  ViewBox: 0 0 1440 300
  y=0   → szczyt diva (fromColor widoczny przez przezroczystość SVG)
  y=210 → linia bazowa głównej masy cieczy
  y=300 → dolna krawędź diva (toColor)

  Palce: teardrop-y, wąskie u dołu (baza ~y=215),
         rozszerzają się w środku, zwężają do zaokrąglonego czubka u góry.
  Krople: elipsy wyższe niż baza, między palcami.
*/
const variants = [
  // ── Variant 0: Korona – 5 równoważnych palców ──────────────────────────
  {
    body: [
      'M0,300 L0,215',
      'C 120,208 240,220 360,213',
      'C 480,206 600,218 720,211',
      'C 840,204 960,218 1080,211',
      'C 1200,204 1320,216 1440,210',
      'L1440,300 Z',
    ].join(' '),
    fingers: [
      // palec 1 – x≈180
      'M152,215 C144,182 137,140 143,100 C146,78 158,66 174,63 C190,60 204,72 208,96 C213,128 209,176 200,215 Z',
      // palec 2 – x≈440
      'M408,215 C399,180 390,133 396,85 C399,60 413,46 432,43 C451,40 467,54 472,82 C478,118 474,172 463,215 Z',
      // palec 3 – x≈720, najwyższy (środek)
      'M695,215 C685,177 674,125 680,70 C683,44 699,30 720,27 C741,24 759,38 765,65 C772,108 768,165 755,215 Z',
      // palec 4 – x≈1005
      'M980,215 C971,180 963,136 969,88 C972,63 984,49 1002,46 C1020,43 1035,57 1040,82 C1046,118 1043,172 1031,215 Z',
      // palec 5 – x≈1275
      'M1252,215 C1244,183 1237,144 1243,106 C1246,81 1258,67 1274,64 C1290,61 1304,75 1308,101 C1313,130 1310,177 1300,215 Z',
    ],
    drops: [
      { cx:  60, cy: 168, rx: 14, ry: 22 },
      { cx: 300, cy: 148, rx: 11, ry: 18 },
      { cx: 565, cy: 125, rx: 16, ry: 25 },
      { cx: 850, cy: 130, rx: 13, ry: 21 },
      { cx: 1130, cy: 145, rx: 15, ry: 23 },
      { cx: 1405, cy: 165, rx: 12, ry: 19 },
    ],
  },

  // ── Variant 1: Agresywny – 3 wysokie + 2 flanki ───────────────────────
  {
    body: [
      'M0,300 L0,220',
      'C 90,212 180,225 270,216',
      'C 360,207 450,222 540,213',
      'C 630,204 720,220 810,212',
      'C 900,204 990,220 1080,212',
      'C 1170,204 1260,218 1350,212',
      'C 1390,208 1420,218 1440,213',
      'L1440,300 Z',
    ].join(' '),
    fingers: [
      // lewy wysoki – x≈270
      'M242,220 C232,183 220,130 227,75 C230,48 245,33 264,30 C283,27 300,42 306,70 C313,110 309,170 298,220 Z',
      // centralny – najwyższy, x≈715
      'M678,220 C666,178 653,118 660,58 C663,28 682,12 706,9 C730,6 751,22 758,52 C766,98 762,162 748,220 Z',
      // prawy wysoki – x≈1150
      'M1120,220 C1110,184 1098,132 1105,78 C1108,50 1122,35 1142,32 C1162,29 1179,44 1185,72 C1192,112 1188,172 1176,220 Z',
      // lewa flanka – x≈480
      'M460,220 C453,193 447,160 453,128 C456,105 465,93 478,91 C491,89 502,101 506,122 C511,150 507,188 498,220 Z',
      // prawa flanka – x≈950
      'M930,220 C923,193 917,160 922,128 C925,106 934,94 947,92 C960,90 971,102 975,123 C980,151 976,188 967,220 Z',
    ],
    drops: [
      { cx: 100,  cy: 155, rx: 18, ry: 28 },
      { cx: 390,  cy: 130, rx: 14, ry: 22 },
      { cx: 545,  cy: 148, rx: 10, ry: 16 },
      { cx: 875,  cy: 125, rx: 20, ry: 30 },
      { cx: 1005, cy: 142, rx: 11, ry: 18 },
      { cx: 1320, cy: 135, rx: 19, ry: 29 },
      { cx: 1425, cy: 162, rx:  9, ry: 14 },
    ],
  },

  // ── Variant 2: Delikatny – niższe palce, dużo drobnych kropel ─────────
  {
    body: [
      'M0,300 L0,225',
      'C 180,218 360,228 540,221',
      'C 720,214 900,226 1080,219',
      'C 1260,212 1380,222 1440,218',
      'L1440,300 Z',
    ].join(' '),
    fingers: [
      // x≈150
      'M128,225 C121,200 116,168 121,140 C124,118 134,106 148,104 C162,102 174,114 178,134 C183,158 180,196 171,225 Z',
      // x≈480
      'M456,225 C448,198 441,162 447,130 C450,107 462,94 477,92 C492,90 505,103 509,126 C514,152 510,194 500,225 Z',
      // x≈820
      'M794,225 C785,196 777,157 783,122 C786,98 799,84 815,82 C831,80 845,93 849,118 C855,146 851,190 840,225 Z',
      // x≈1195
      'M1174,225 C1166,198 1159,162 1164,130 C1167,108 1179,95 1194,93 C1209,91 1222,104 1226,127 C1231,153 1228,195 1217,225 Z',
    ],
    drops: [
      { cx:  55, cy: 190, rx: 12, ry: 18 },
      { cx: 270, cy: 170, rx:  9, ry: 14 },
      { cx: 318, cy: 148, rx:  7, ry: 11 },
      { cx: 610, cy: 158, rx: 11, ry: 17 },
      { cx: 652, cy: 135, rx:  7, ry: 12 },
      { cx: 990, cy: 152, rx: 13, ry: 20 },
      { cx: 1050, cy: 128, rx:  8, ry: 13 },
      { cx: 1380, cy: 168, rx: 10, ry: 16 },
      { cx: 1430, cy: 145, rx:  7, ry: 11 },
    ],
  },
]

const v = computed(() => variants[props.variant] ?? variants[0])
</script>
