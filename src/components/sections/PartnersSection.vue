<template>
  <section class="bg-white py-16 md:py-20">
    <div class="max-w-7xl mx-auto px-6 md:px-8">
      <div class="text-center mb-12">
        <p class="font-display font-bold uppercase tracking-[0.3em] text-rally-yellow opacity-80 text-sm mb-1">Współpraca</p>
        <h2 class="font-display font-black uppercase text-rally-black text-4xl md:text-6xl leading-none">
          Wspierają nas
        </h2>
      </div>

      <!-- Sponsor tytularny -->
      <div class="border-2 border-rally-yellow p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center gap-8">
        <!-- Logo sponsora tytularnego -->
        <a
          href="https://amggc.eu/"
          target="_blank"
          rel="noopener noreferrer"
          title="AMG General Contractor"
          class="shrink-0 w-56 h-36 bg-rally-gray flex items-center justify-center border border-rally-black rounded-sm p-4 shadow-md hover:border-rally-yellow hover:-translate-y-0.5 transition-all duration-200"
        >
          <img
            src="/assets/sponsors/amg.png"
            alt="AMG General Contractor"
            class="max-w-full max-h-full object-contain"
            loading="lazy"
          />
        </a>
        <!-- Tekst -->
        <div>
          <p class="font-display font-bold uppercase tracking-widest text-rally-yellow text-xs mb-2">Sponsor Tytularny</p>
          <h3 class="font-display font-black uppercase text-rally-black text-2xl md:text-3xl mb-4">AMG - Sponsor Tytularny</h3>
          <p class="text-gray-600 leading-relaxed text-sm md:text-base">
            <span class="font-bold text-lg">Witam</span>  <br/>
            AMG to nie tylko generalny wykonawca inwestycji ale również transport wypożyczalnia autolawet, busów, aut i maszyn budowlanych. Dlaczego wspieram rajd? Moją pasją zawsze był motorsport, sam jestem kierowcą rajdowym 😊, ale tak naprawdę moim planem jest wspierać młodych ambitnych zawodników, którzy mają talent i ambicje by startować i wygrywać w rajdach, ale często ogranicza ich brak budżetu bo to nie tani sport. <br/>
            Wspieram rajd dlatego że Karkonosze cały czas stały rajdami i świetnie,że mogę być częścią tego projektu i zapisać się w kartach historii motosportu jako osoba która pomogła w reaktywowaniu Rajdu Karkonoskiego. <br/>
            <br/>
          </p>
          <p class="text-rally-black leading-relaxed text-base md:text-lg text-right font-display font-bold italic">Pozdrawiam Gracjan Niemczyk</p>
        </div>
      </div>

      <!-- Partnerzy -->
      <div class="mb-4">
        <h3 class="font-display font-bold uppercase tracking-widest text-rally-black text-sm mb-6 text-center opacity-50">Partnerzy</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          <PartnerLogo v-for="item in partners" :key="item.name" :label="item.name" :logo="item.logo" :href="item.href" :link-title="item.linkTitle" />
        </div>
      </div>

      <!-- Gminy partnerskie -->
      <div class="mb-4">
        <h3 class="font-display font-bold uppercase tracking-widest text-rally-black text-sm mb-6 text-center opacity-50">Gminy partnerskie</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-3xl mx-auto">
          <PartnerLogo v-for="item in municipalPartners" :key="item.name" :label="item.name" :logo="item.logo" :href="item.href" :link-title="item.linkTitle" />
        </div>
      </div>

      <!-- Patroni medialni -->
      <div>
        <h3 class="font-display font-bold uppercase tracking-widest text-rally-black text-sm mb-6 text-center opacity-50">Patroni medialni</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <PartnerLogo v-for="item in mediaPatrons" :key="item.name" :label="item.name" :logo="item.logo" :href="item.href" :link-title="item.linkTitle" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PartnerLogo from '../ui/PartnerLogo.vue'

const partners = [
  {
    name: 'Alniko',
    logo: '/assets/sponsors/alniko.webp',
    href: 'http://alniko.eu/',
    linkTitle: 'Alniko skład opału / skup stali i metali kolorowych',
  },
  {
    name: 'Ultima Auto',
    logo: '/assets/sponsors/ultima.png',
    href: 'https://www.ultima-auto.pl/',
    linkTitle: 'Ultima Auto - Dealer marek ŠKODA, KIA, ISUZU, MG, OMODA',
  },
  {
    name: 'Divemed',
    logo: '/assets/sponsors/divemed.png',
    href: 'https://divemed.pl',
    linkTitle: 'Divemed: Profesjonalne usługi i sprzęt z sektora medycznego',
  },
  {
    name: 'Rally Devil',
    logo: '/assets/sponsors/rallydevil.webp',
    href: 'http://rallydevil.com',
    linkTitle: 'Platforma do prowadzenia rajdów oraz zawodów wirtualnych',
  },
  {
    name: 'Divemed Garage',
    logo: '/assets/sponsors/divemend-garage.png',
    href: 'https://divemed.com.pl/',
    linkTitle: 'Divemed Garage: Mechanik samochodowy Jelenia Góra',
  },
  {
    name: 'Pasaż Górski',
    logo: '/assets/sponsors/pasaz-gorski.webp',
    href: 'https://www.facebook.com/p/Pasa%C5%BC-G%C3%B3rski-Jelenia-G%C3%B3ra-61581809675029/',
    linkTitle: 'Pasaż Górski Twój punkt na mapie Jeleniej Góry. Blisko, wygodnie, po sąsiedzku. Z E.Leclerc w sercu pasażu!',
  },
  {
    name: 'Auto Spa Kaczus',
    logo: '/assets/sponsors/kaczus.jpg',
    href: 'https://www.facebook.com/AutoSpaKaczuS/',
    linkTitle: 'Auto Spa Kaczus Zawidów',
  },
  {
    name: 'Patron Ubezpieczenia',
    logo: '/assets/sponsors/logo-patron.png',
    href: 'https://patronubezpieczenia.pl/',
    linkTitle: 'Patron Ubezpieczenia',
  },
  {
    name: 'Mechanika Pojazdowa Stefan Klimek',
    logo: '/assets/sponsors/klimek.webp',
    href: 'https://www.facebook.com/stefan.klimek.73',
    linkTitle: 'Mechanika Pojazdowa Stefan Klimek',
  },
  {
    name: 'Poduszink',
    logo: '/assets/sponsors/poduszink.jpeg',
    href: 'https://www.facebook.com/poduszink/',
    linkTitle: 'Poduszink',
  },
  {
    name: 'Piekarnie-Cukiernie Stankiewicz i S-ka',
    logo: '/assets/sponsors/stankiewicz.jpg',
    href: 'https://www.facebook.com/piekarniastankiewicz',
    linkTitle: 'Piekarnie-Cukiernie Stankiewicz i S-ka',
  },
  { name: 'Logo Prosiak', logo: '/assets/sponsors/LogoProsiak.png' },
  { name: 'Logo Z napisem od Piotra Rogaty', logo: '/assets/sponsors/LogoZnapisemodPiotraRogaty2.png' },
  { name: 'Divemed Apartamenty', logo: '/assets/sponsors/divemed-apartamenty.png' },
  { name: 'Osada Śnieżka', logo: '/assets/sponsors/logo-osada-sniezka-color.svg' },
]

const municipalPartners = [
  {
    name: 'Jelenia Góra',
    logo: '/assets/gminy/Jelenia_Gora_logo.jpg',
    href: 'https://www.jeleniagora.pl/',
    linkTitle: 'Jelenia Góra',
  },
  {
    name: 'Powiat Karkonoski',
    logo: '/assets/gminy/powiat.png',
    href: 'https://powiatkarkonoski.eu/',
    linkTitle: 'Powiat Karkonoski',
  },
]

const mediaPatrons = [
  { name: 'Kalendarz motoryzacyjny', logo: '/assets/sponsors/media/kalendarz-motoryzacyjny.png' },
  {
    name: 'Radio Eska',
    logo: '/assets/sponsors/media/eska.webp',
    href: 'https://www.eska.pl/',
    linkTitle: 'Radio Eska',
  },
  {
    name: 'Radio Eska2',
    logo: '/assets/sponsors/media/eska2.webp',
    href: 'https://player2.eska.pl/',
    linkTitle: 'Radio Eska2',
  },
  {
    name: 'Telewizja Dami',
    logo: '/assets/sponsors/media/logo-dami-jg.png',
    href: 'https://www.tvdami.eu/',
    linkTitle: 'Telewizja Dami',
  },
  {
    name: 'Podkręcamy - Rozkręcamy',
    logo: '/assets/sponsors/media/rozkrecamy.png',
    href: 'https://www.facebook.com/people/Podkr%C4%99camy-Rozkr%C4%99camy/100063474699697/',
    linkTitle: 'Podkręcamy - Rozkręcamy',
  },
]
</script>
