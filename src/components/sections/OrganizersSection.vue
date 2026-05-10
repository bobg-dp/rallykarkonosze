<template>
  <section class="bg-rally-black-deep py-16 md:py-20">
    <div class="max-w-7xl mx-auto px-6 md:px-8">
      <div class="text-center mb-12">
        <p class="font-display font-bold uppercase tracking-[0.3em] text-rally-yellow opacity-70 text-sm mb-1">Organizacja</p>
        <h2 class="font-display font-black uppercase text-white text-4xl md:text-6xl leading-none">
          Organizatorzy<br/>i Cykle
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <!-- Organizatorzy -->
        <div>
          <h3 class="font-display font-bold uppercase tracking-widest text-rally-yellow text-sm mb-8 text-center">Organizatorzy</h3>
          <div class="flex flex-col gap-6">
            <!-- AKK -->
            <div class="flex items-center gap-5 group">
              <div class="shrink-0 w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden p-2 shadow-lg">
                <img
                  src="/assets/AKK-Orange-white.webp"
                  alt="Automobilklub Karkonosze"
                  class="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <p class="font-display font-bold uppercase text-white text-base tracking-wide group-hover:text-rally-yellow transition-colors duration-200">Automobilklub Karkonosze</p>
                <p class="text-gray-400 text-sm">Organizator główny</p>
              </div>
            </div>

            <!-- PZM -->
            <div class="flex items-center gap-5 group">
              <div class="shrink-0 w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden p-2 shadow-lg">
                <img
                  src="/assets/pzm.webp"
                  alt="Polski Związek Motorowy"
                  class="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <p class="font-display font-bold uppercase text-white text-base tracking-wide group-hover:text-rally-yellow transition-colors duration-200">Polski Związek Motorowy</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Cykle -->
        <div>
          <h3 class="font-display font-bold uppercase tracking-widest text-rally-yellow text-sm mb-8 text-center">Rajd w cyklu</h3>
          <div class="flex flex-col gap-6">
            <!-- RMP -->
            <div class="flex items-center gap-5 group">
              <div class="shrink-0 w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden p-2 shadow-lg">
                <img
                  src="/assets/rmp.jpg"
                  alt="Rajdowe Mistrzostwa Południa"
                  class="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <p class="font-display font-bold uppercase text-white text-base tracking-wide group-hover:text-rally-yellow transition-colors duration-200">Rajdowe Mistrzostwa Południa</p>
                <p class="text-gray-400 text-sm">Rally Sprint</p>
              </div>
            </div>

            <!-- RSMDS -->
            <div class="flex items-center gap-5 group">
              <div class="shrink-0 w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden p-2 shadow-lg">
                <img
                  src="/assets/rsmds.jpg"
                  alt="Rajdowe Samochodowe Mistrzostwa Dolnego Śląska"
                  class="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <p class="font-display font-bold uppercase text-white text-base tracking-wide group-hover:text-rally-yellow transition-colors duration-200">Rajdowe Samochodowe Mistrzostwa Dolnego Śląska</p>
                <p class="text-gray-400 text-sm">Runda Okręgowa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
