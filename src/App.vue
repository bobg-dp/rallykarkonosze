<template>
  <div class="app-wrapper">
    <SeoHead />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SeoHead from './components/layout/SeoHead.vue'
</script>
