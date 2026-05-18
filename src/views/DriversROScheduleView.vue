<template>
  <div>
    <TheHeader />
    <main class="min-h-screen pt-32 md:pt-48 pb-20">
      <div class="max-w-5xl mx-auto px-6 md:px-8">
        <div class="flex flex-wrap items-center gap-4 md:gap-6 mb-6">
          <div
            class="flex items-center justify-center w-28 h-14 md:w-36 md:h-16"
          >
            <img
              src="/assets/cycles/rsmds.webp"
              alt="Rajdowe Samochodowe Mistrzostwa Dolnego Śląska"
              class="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>
          <div
            class="flex items-center justify-center w-28 h-14 md:w-36 md:h-16"
          >
            <img
              src="/assets/cycles/rmp-white.webp"
              alt="Rajdowe Mistrzostwa Południa"
              class="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
        <p
          class="font-display font-bold uppercase tracking-[0.3em] text-rally-yellow text-sm mb-2"
        >
          AMG Rally Karkonosze 2026 - Rajd Okręgowy
        </p>
        <h1
          class="font-display font-black uppercase text-rally-black text-4xl md:text-6xl mb-12"
        >
          Zawodnicy - RO<br />Harmonogram
        </h1>

        <div class="space-y-10">
          <div v-for="day in schedule" :key="day.shortDate">
            <!-- Date header -->
            <div class="flex items-stretch">
              <div
                :class="[
                  'px-5 py-3 flex flex-col justify-center shrink-0',
                  day.isRaceDay ? 'bg-rally-yellow' : 'bg-rally-black',
                ]"
              >
                <p
                  :class="[
                    'font-display font-bold uppercase text-xs tracking-widest leading-none mb-1',
                    day.isRaceDay
                      ? 'text-rally-black opacity-60'
                      : 'text-rally-yellow',
                  ]"
                >
                  {{ day.dayOfWeek }}
                </p>
                <p
                  :class="[
                    'font-display font-black uppercase text-2xl leading-none',
                    day.isRaceDay ? 'text-rally-black' : 'text-white',
                  ]"
                >
                  {{ day.shortDate }}
                </p>
              </div>
              <div
                class="flex-1 flex items-center bg-gray-50 border border-l-0 border-b-0 border-gray-200 px-5"
              >
                <p
                  class="font-display font-semibold uppercase text-sm text-gray-600 tracking-wider"
                >
                  {{ day.label }}
                </p>
              </div>
            </div>

            <!-- Events list -->
            <div
              class="border border-t-0 border-gray-200 divide-y divide-gray-100"
            >
              <div
                v-for="(event, i) in day.events"
                :key="i"
                class="flex items-start hover:bg-gray-50 transition-colors"
              >
                <div
                  class="w-36 md:w-44 shrink-0 border-r border-gray-100 px-4 py-4"
                >
                  <span
                    class="font-display font-bold text-rally-black text-sm leading-snug"
                    >{{ event.time }}</span
                  >
                </div>
                <div class="flex-1 px-5 py-4">
                  <p
                    class="font-display font-semibold uppercase text-rally-black text-sm tracking-wide leading-snug"
                  >
                    {{ event.name }}
                  </p>
                  <p
                    v-if="event.location"
                    class="text-gray-500 text-xs mt-1 leading-snug"
                  >
                    {{ event.location }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from "../components/layout/TheHeader.vue";
import TheFooter from "../components/layout/TheFooter.vue";

const schedule = [
  {
    shortDate: "14.05.2026",
    dayOfWeek: "Czwartek",
    label: "Regulamin i rejestracja",
    isRaceDay: false,
    events: [
      {
        time: "12:00",
        name: "Opublikowanie Regulaminu Uzupełniającego",
        location: "www.rallykarkonosze.pl",
      },
    ],
  },
  {
    shortDate: "18.05.2026",
    dayOfWeek: "Poniedziałek",
    label: "Otwarcie zapisów",
    isRaceDay: false,
    events: [
      { time: "0:00", name: "Otwarcie Listy zgłoszeń", location: "" },
      {
        time: "0:00",
        name: "Otwarcie zgłoszeń akredytacji dla Mediów",
        location: "",
      },
    ],
  },
  {
    shortDate: "07.06.2026",
    dayOfWeek: "Niedziela",
    label: "Zamknięcie zapisów",
    isRaceDay: false,
    events: [
      {
        time: "23:59",
        name: "Zamknięcie zgłoszeń akredytacji dla Mediów",
        location: "",
      },
      { time: "23:59", name: "Zamknięcie Listy zgłoszeń", location: "" },
      {
        time: "23:59",
        name: "Termin zamówienia dodatkowej powierzchni w Parku Serwisowym",
        location: "",
      },
    ],
  },
  {
    shortDate: "09.06.2026",
    dayOfWeek: "Wtorek",
    label: "Publikacje oficjalne",
    isRaceDay: false,
    events: [
      {
        time: "12:00",
        name: "Opublikowanie Listy zgłoszeń",
        location: "www.rallykarkonosze.pl",
      },
      {
        time: "12:00",
        name: "Opublikowanie Planu Parku Serwisowego",
        location: "Elektroniczna Tablica Ogłoszeń",
      },
    ],
  },
  {
    shortDate: "10.06.2026",
    dayOfWeek: "Środa",
    label: "Publikacje oficjalne",
    isRaceDay: false,
    events: [
      {
        time: "12:00",
        name: "Opublikowanie Harmonogramu Odbioru Administracyjnego",
        location: "Elektroniczna Tablica Ogłoszeń",
      },
      {
        time: "12:00",
        name: "Opublikowanie Harmonogramu Badania Kontrolnego",
        location: "",
      },
    ],
  },
  {
    shortDate: "12.06.2026",
    dayOfWeek: "Piątek",
    label: "Odbiór Administracyjny",
    isRaceDay: false,
    events: [
      {
        time: "17:00–20:00",
        name: "Odbiór Administracyjny",
        location:
          '„Divemed Sp. z o.o.", ul. Nowowiejska 81, 58-500 Jelenia Góra',
      },
    ],
  },
  {
    shortDate: "13.06.2026",
    dayOfWeek: "Sobota",
    label: "Dzień I – Zapoznanie, Ceremonia Startu i Sekcja 1",
    isRaceDay: true,
    events: [
      {
        time: "7:00–10:00",
        name: "Odbiór Administracyjny",
        location:
          '„Divemed Sp. z o.o.", ul. Nowowiejska 81, 58-500 Jelenia Góra',
      },
      {
        time: "7:00–10:00",
        name: "Wydawanie Książki drogowej, Mapy Rajdu",
        location: "",
      },
      {
        time: "7:00–10:00",
        name: "Wydawanie materiałów i dokumentów",
        location: "",
      },
      {
        time: "7:00–10:00",
        name: "Wydawanie urządzeń GPS do zapoznania z trasą rajdu",
        location: "",
      },
      {
        time: "7:00",
        name: "Rozpoczęcie zapoznania z trasą rajdu",
        location: "Zgodnie z Załącznikiem 2",
      },
      {
        time: "8:00–14:00",
        name: "Badanie Kontrolne BK 1",
        location:
          '„Stacja Kontroli Pojazdów PZM", ul. Wolności 57, 58-500 Jelenia Góra',
      },
      { time: "8:00–14:00", name: "Montaż urządzeń GPS", location: "" },
      { time: "14:00–14:30", name: "Powtórne Badanie Kontrolne", location: "" },
      {
        time: "14:00",
        name: "Zakończenie zapoznania z trasą rajdu",
        location: "",
      },
      {
        time: "13:30",
        name: "Opublikowanie zmienionej Listy Zgłoszeń",
        location: "Elektroniczna Tablica Ogłoszeń",
      },
      {
        time: "13:30",
        name: "Opublikowanie Harmonogramu wjazdu do Strefy Oczekiwania przed Ceremonią Startu",
        location: "Elektroniczna Tablica Ogłoszeń",
      },
      {
        time: "13:30",
        name: "Opublikowanie Listy startowej dla Ceremonii Startu Honorowego",
        location: "Elektroniczna Tablica Ogłoszeń",
      },
      {
        time: "13:30",
        name: "Opublikowanie Listy startowej dla Sekcji 1 (PKC 0)",
        location: "Elektroniczna Tablica Ogłoszeń",
      },
      {
        time: "16:00",
        name: "Ceremonia Startu Honorowego",
        location:
          '„Urząd Miasta Jelenia Góra", Plac Ratuszowy 2, 58-500 Jelenia Góra',
      },
      {
        time: "18:25",
        name: "Start Rajdu – Sekcja 1 (PKC 0)",
        location: "Park Serwisowy",
      },
      {
        time: "19:03",
        name: "Meta Sekcji 1 (PKC 1A)",
        location: '„Galeria Nowy Rynek", Podwale 25, 58-500 Jelenia Góra',
      },
      {
        time: "21:30",
        name: "Opublikowanie Listy startowej do Sekcji 2 (PKC 1B)",
        location: "Elektroniczna Tablica Ogłoszeń",
      },
    ],
  },
  {
    shortDate: "14.06.2026",
    dayOfWeek: "Niedziela",
    label: "Dzień II – Sekcja 2 i Ceremonia Podium",
    isRaceDay: true,
    events: [
      {
        time: "8:00",
        name: "Badanie Kontrolne dla samochodów ponownie startujących po wycofaniu",
        location: '„Pasaż Górski", Aleja Jana Pawła II 17, 58-500 Jelenia Góra',
      },
      { time: "9:00", name: "Start do Sekcji 2 (PKC 1D)", location: "" },
      { time: "19:07", name: "Ceremonia Podium", location: "" },
      { time: "18:22", name: "Meta Rajdu (PKC 7C)", location: "" },
      {
        time: "Natychmiast po przyjeździe na metę rajdu",
        name: "Badanie Kontrolne BK 2 (zgodnie z instrukcjami sędziów)",
        location:
          '„Divemed Sp. z o.o.", ul. Nowowiejska 81, 58-500 Jelenia Góra',
      },
      {
        time: "18:30",
        name: "Opublikowanie klasyfikacji prowizorycznej",
        location: "Elektroniczna Tablica Ogłoszeń",
      },
      {
        time: "19:30",
        name: "Rozdanie nagród",
        location:
          '„Urząd Miasta Jelenia Góra", Plac Ratuszowy 2, 58-500 Jelenia Góra',
      },
      {
        time: "Po podpisaniu przez ZSS i upłynięciu czasu na protesty",
        name: "Opublikowanie klasyfikacji końcowej",
        location: "Elektroniczna Tablica Ogłoszeń",
      },
    ],
  },
];
</script>
