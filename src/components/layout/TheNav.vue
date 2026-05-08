<template>
  <nav class="bg-rally-black" style="height: 52px;">
    <div class="max-w-7xl mx-auto h-full flex items-center px-8">
      <ul class="flex items-center gap-0 h-full">
        <!-- Informacje dropdown -->
        <li class="relative h-full flex items-center group">
          <button
            class="font-display font-semibold uppercase tracking-wider text-sm text-white px-4 h-full flex items-center gap-1 hover:text-rally-yellow transition-colors duration-200"
          >
            Informacje
            <svg class="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div class="absolute top-full left-0 bg-white shadow-xl min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50">
            <RouterLink to="/o-rajdzie" class="block px-5 py-3 font-display font-semibold uppercase text-sm text-rally-black hover:bg-rally-yellow hover:text-rally-black transition-colors duration-150 border-b border-gray-100">O rajdzie</RouterLink>
            <RouterLink to="/aktualnosci" class="block px-5 py-3 font-display font-semibold uppercase text-sm text-rally-black hover:bg-rally-yellow hover:text-rally-black transition-colors duration-150 border-b border-gray-100">Aktualności</RouterLink>
            <RouterLink to="/lista-zgloszen" class="block px-5 py-3 font-display font-semibold uppercase text-sm text-rally-black hover:bg-rally-yellow hover:text-rally-black transition-colors duration-150">Lista zgłoszeń</RouterLink>
          </div>
        </li>

        <!-- Zawodnicy RSMDS -->
        <li class="h-full flex items-center">
          <RouterLink
            to="/zawodnicy-rsmds"
            class="font-display font-semibold uppercase tracking-wider text-sm text-white px-4 h-full flex items-center hover:text-rally-yellow transition-colors duration-200"
          >
            Zawodnicy RSMDS
          </RouterLink>
        </li>

        <!-- Zawodnicy RPP -->
        <li class="h-full flex items-center">
          <RouterLink
            to="/zawodnicy-rpp"
            class="font-display font-semibold uppercase tracking-wider text-sm text-white px-4 h-full flex items-center hover:text-rally-yellow transition-colors duration-200"
          >
            Zawodnicy RPP
          </RouterLink>
        </li>

        <!-- Kibice dropdown -->
        <li class="relative h-full flex items-center group">
          <button
            class="font-display font-semibold uppercase tracking-wider text-sm text-white px-4 h-full flex items-center gap-1 hover:text-rally-yellow transition-colors duration-200"
          >
            Kibice
            <svg class="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div class="absolute top-full left-0 bg-white shadow-xl min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50">
            <RouterLink to="/kibice/mieszkancy" class="block px-5 py-3 font-display font-semibold uppercase text-sm text-rally-black hover:bg-rally-yellow hover:text-rally-black transition-colors duration-150 border-b border-gray-100">Mieszkańcy</RouterLink>
            <RouterLink to="/kibice/informacje" class="block px-5 py-3 font-display font-semibold uppercase text-sm text-rally-black hover:bg-rally-yellow hover:text-rally-black transition-colors duration-150 border-b border-gray-100">Przydatne informacje</RouterLink>
            <RouterLink to="/kibice/sklep" class="block px-5 py-3 font-display font-semibold uppercase text-sm text-rally-black hover:bg-rally-yellow hover:text-rally-black transition-colors duration-150">Sklep</RouterLink>
          </div>
        </li>

        <!-- Partnerzy -->
        <li class="h-full flex items-center">
          <RouterLink
            to="/partnerzy"
            class="font-display font-semibold uppercase tracking-wider text-sm text-white px-4 h-full flex items-center hover:text-rally-yellow transition-colors duration-200"
          >
            Partnerzy
          </RouterLink>
        </li>

        <!-- Kontakt -->
        <li class="h-full flex items-center">
          <RouterLink
            to="/kontakt"
            class="font-display font-semibold uppercase tracking-wider text-sm text-white px-4 h-full flex items-center hover:text-rally-yellow transition-colors duration-200"
          >
            Kontakt
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
