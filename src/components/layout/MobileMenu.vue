<template>
  <div class="py-4 px-6">
    <!-- Social + wyniki -->
    <div class="flex items-center gap-4 mb-4 pb-4 border-b border-rally-gray">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="text-white hover:text-rally-yellow transition-colors" aria-label="Facebook">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073C24 5.40548 18.627 0 12 0S0 5.40548 0 12.073C0 18.0994 4.38825 23.0943 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.0943 24 18.0994 24 12.073z"/></svg>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="text-white hover:text-rally-yellow transition-colors" aria-label="Instagram">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
      </a>
      <a href="#" class="ml-auto bg-rally-yellow text-rally-black font-display font-bold uppercase text-xs px-4 py-2 tracking-wider">Wyniki Online</a>
    </div>

    <!-- Menu links -->
    <nav>
      <div class="mb-2">
        <p class="font-display font-bold uppercase text-rally-yellow text-xs tracking-widest mb-1">Informacje</p>
        <RouterLink to="/o-rajdzie" @click="$emit('close')" class="block py-2 px-3 font-display font-semibold uppercase text-sm text-white hover:text-rally-yellow transition-colors">O rajdzie</RouterLink>
        <RouterLink to="/aktualnosci" @click="$emit('close')" class="block py-2 px-3 font-display font-semibold uppercase text-sm text-white hover:text-rally-yellow transition-colors">Aktualności</RouterLink>
      </div>
      <div class="border-t border-rally-gray pt-2">
        <RouterLink to="/zawodnicy-ro" @click="$emit('close')" class="block py-2 font-display font-bold uppercase text-sm text-white hover:text-rally-yellow transition-colors">Zawodnicy RO</RouterLink>
        <span class="block py-2 px-3 font-display font-semibold uppercase text-sm text-gray-500 cursor-not-allowed select-none">Elektroniczna Tablica Ogłoszeń</span>
        <span class="block py-2 px-3 font-display font-semibold uppercase text-sm text-gray-500 cursor-not-allowed select-none">Dokumenty</span>
        <span class="block py-2 px-3 font-display font-semibold uppercase text-sm text-gray-500 cursor-not-allowed select-none">Harmonogram</span>
        <span class="block py-2 px-3 font-display font-semibold uppercase text-sm text-gray-500 cursor-not-allowed select-none">Lista Startowa</span>
      </div>
      <div class="border-t border-rally-gray pt-2">
        <RouterLink to="/zawodnicy-rs" @click="$emit('close')" class="block py-2 font-display font-bold uppercase text-sm text-white hover:text-rally-yellow transition-colors">Zawodnicy RS</RouterLink>
        <span class="block py-2 px-3 font-display font-semibold uppercase text-sm text-gray-500 cursor-not-allowed select-none">Elektroniczna Tablica Ogłoszeń</span>
        <span class="block py-2 px-3 font-display font-semibold uppercase text-sm text-gray-500 cursor-not-allowed select-none">Dokumenty</span>
        <span class="block py-2 px-3 font-display font-semibold uppercase text-sm text-gray-500 cursor-not-allowed select-none">Harmonogram</span>
        <span class="block py-2 px-3 font-display font-semibold uppercase text-sm text-gray-500 cursor-not-allowed select-none">Lista Startowa</span>
      </div>
      <div class="border-t border-rally-gray">
        <p class="font-display font-bold uppercase text-rally-yellow text-xs tracking-widest mt-2 mb-1">Kibice</p>
        <span class="block py-2 px-3 font-display font-semibold uppercase text-sm text-gray-500 cursor-not-allowed select-none">Mieszkańcy</span>
        <span class="block py-2 px-3 font-display font-semibold uppercase text-sm text-gray-500 cursor-not-allowed select-none">Przydatne informacje</span>
        <RouterLink to="/kibice/bezpiecznie" @click="$emit('close')" class="block py-2 px-3 font-display font-semibold uppercase text-sm text-white hover:text-rally-yellow transition-colors">Kibicuj Bezpiecznie</RouterLink>
        <span class="block py-2 px-3 font-display font-semibold uppercase text-sm text-gray-500 cursor-not-allowed select-none">Sklep</span>
      </div>
      <RouterLink to="/partnerzy" @click="$emit('close')" class="block py-2 font-display font-bold uppercase text-sm text-white hover:text-rally-yellow transition-colors border-t border-rally-gray">Partnerzy</RouterLink>
      <RouterLink to="/kontakt" @click="$emit('close')" class="block py-2 font-display font-bold uppercase text-sm text-white hover:text-rally-yellow transition-colors border-t border-rally-gray">Kontakt</RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineEmits(['close'])
</script>
