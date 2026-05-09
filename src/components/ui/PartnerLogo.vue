<template>
  <div class="bg-gray-50 border border-gray-200 flex items-center justify-center p-4 hover:border-rally-yellow transition-colors duration-200 group" style="aspect-ratio: 3/2;">
    <img
      v-if="logo"
      :src="logo"
      :alt="label"
      class="max-w-full max-h-full object-contain"
      loading="lazy"
    />
    <span v-else class="font-display font-semibold uppercase text-xs tracking-wider text-gray-400 group-hover:text-gray-600 transition-colors text-center">
      {{ label }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, default: 'Partner' },
  logo:  { type: String, default: null },
})
</script>
