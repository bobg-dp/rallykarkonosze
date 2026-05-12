<template>
  <component
    :is="href ? 'a' : 'div'"
    :href="href || undefined"
    :title="linkTitle || label"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer' : undefined"
    class="bg-gray-50 border border-gray-200 flex items-center justify-center p-4 transition-colors duration-200 group"
    :class="href ? 'hover:border-rally-yellow hover:bg-white' : 'hover:border-rally-yellow'"
    style="aspect-ratio: 3/2;"
  >
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
  </component>
</template>

<script setup>
defineProps({
  label: { type: String, default: 'Partner' },
  logo:  { type: String, default: null },
  href: { type: String, default: null },
  linkTitle: { type: String, default: null },
})
</script>
