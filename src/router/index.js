import HomeView from '../views/HomeView.vue'
import { allNews } from '../data/news.js'

export const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "AMG Rally Karkonosze 2026 | Rajd w Jeleniej Górze",
      description:
        "Oficjalna strona AMG Rally Karkonosze 2026. Informacje dla kibiców i zawodników, harmonogram, dokumenty, aktualności i partnerzy wydarzenia.",
      image: "/hero.jpg",
      schemaType: "SportsEvent",
      breadcrumbs: [{ name: "Strona główna", path: "/" }],
    },
  },
  {
    path: "/o-rajdzie",
    name: "about-rally",
    component: () => import("../views/AboutRallyView.vue"),
    meta: {
      title: "O rajdzie | AMG Rally Karkonosze 2026",
      description:
        "Poznaj AMG Rally Karkonosze 2026: charakter wydarzenia, rangi sportowe oraz najważniejsze informacje o rajdzie w Jeleniej Górze.",
      breadcrumbs: [
        { name: "Strona główna", path: "/" },
        { name: "O rajdzie", path: "/o-rajdzie" },
      ],
    },
  },
  {
    path: "/aktualnosci",
    name: "news",
    component: () => import("../views/NewsView.vue"),
    meta: {
      title: "Aktualności | AMG Rally Karkonosze 2026",
      description:
        "Najnowsze wiadomości dotyczące AMG Rally Karkonosze 2026: zapisy, komunikaty organizacyjne i informacje dla uczestników.",
      image: "/assets/news/news1.webp",
      breadcrumbs: [
        { name: "Strona główna", path: "/" },
        { name: "Aktualności", path: "/aktualnosci" },
      ],
    },
  },
  {
    path: "/aktualnosci/:slug",
    name: "news-article",
    component: () => import("../views/NewsArticleView.vue"),
  },
  {
    path: "/aktualnosci/1",
    redirect: allNews[0]?.url || "/aktualnosci",
  },
  {
    path: "/zawodnicy-ro",
    name: "drivers-ro",
    component: () => import("../views/DriversROView.vue"),
    meta: {
      title: "Zawodnicy RO | AMG Rally Karkonosze 2026",
      description:
        "Informacje dla zawodników Rajdu Okręgowego: zasady udziału, materiały organizacyjne i szybki dostęp do dokumentów oraz harmonogramu.",
      breadcrumbs: [
        { name: "Strona główna", path: "/" },
        { name: "Zawodnicy RO", path: "/zawodnicy-ro" },
      ],
    },
  },
  {
    path: "/zawodnicy-ro/dokumenty",
    name: "drivers-ro-documents",
    component: () => import("../views/DriversRODocumentsView.vue"),
    meta: {
      title: "Dokumenty RO | AMG Rally Karkonosze 2026",
      description:
        "Dokumenty dla zawodników Rajdu Okręgowego AMG Rally Karkonosze 2026: regulaminy, formularze i pliki do pobrania.",
      breadcrumbs: [
        { name: "Strona główna", path: "/" },
        { name: "Zawodnicy RO", path: "/zawodnicy-ro" },
        { name: "Dokumenty", path: "/zawodnicy-ro/dokumenty" },
      ],
    },
  },
  {
    path: "/zawodnicy-ro/harmonogram",
    name: "drivers-ro-schedule",
    component: () => import("../views/DriversROScheduleView.vue"),
    meta: {
      title: "Harmonogram RO | AMG Rally Karkonosze 2026",
      description:
        "Harmonogram Rajdu Okręgowego AMG Rally Karkonosze 2026: najważniejsze terminy, odbiory, odcinki i organizacja weekendu rajdowego.",
      breadcrumbs: [
        { name: "Strona główna", path: "/" },
        { name: "Zawodnicy RO", path: "/zawodnicy-ro" },
        { name: "Harmonogram", path: "/zawodnicy-ro/harmonogram" },
      ],
    },
  },
  {
    path: "/zawodnicy-ro/tablica",
    name: "drivers-ro-notice-board",
    component: () => import("../views/DriversNoticeBoardView.vue"),
    props: {
      board: "ro",
      seriesLabel: "AMG Rally Karkonosze 2026 - Rajd Okręgowy",
      pageTitle: "Zawodnicy - RO",
      pageDescription:
        "Elektroniczna Tablica Ogłoszeń dla zawodników Rajdu Okręgowego. Komunikaty, dokumenty i publikacje organizatora pobierane są na żywo z systemu tablicy ogłoszeń.",
      backPath: "/zawodnicy-ro",
      backLabel: "Powrót do strefy zawodników RO",
      logos: [
        {
          src: "/assets/cycles/rsmds.webp",
          alt: "Rajdowe Samochodowe Mistrzostwa Dolnego Śląska",
        },
        {
          src: "/assets/cycles/rmp-white.webp",
          alt: "Rajdowe Mistrzostwa Południa",
        },
      ],
    },
    meta: {
      title: "Elektroniczna Tablica Ogłoszeń RO | AMG Rally Karkonosze 2026",
      description:
        "Elektroniczna Tablica Ogłoszeń dla zawodników Rajdu Okręgowego AMG Rally Karkonosze 2026: komunikaty, dokumenty i publikacje organizatora.",
      breadcrumbs: [
        { name: "Strona główna", path: "/" },
        { name: "Zawodnicy RO", path: "/zawodnicy-ro" },
        {
          name: "Elektroniczna Tablica Ogłoszeń",
          path: "/zawodnicy-ro/tablica",
        },
      ],
    },
  },
  {
    path: "/zawodnicy-rs",
    name: "drivers-rs",
    component: () => import("../views/DriversRSView.vue"),
    meta: {
      title: "Zawodnicy RS | AMG Rally Karkonosze 2026",
      description:
        "Informacje dla zawodników Rally Sprint: organizacja startu, dokumenty, harmonogram oraz zasady udziału w AMG Rally Karkonosze 2026.",
      breadcrumbs: [
        { name: "Strona główna", path: "/" },
        { name: "Zawodnicy RS", path: "/zawodnicy-rs" },
      ],
    },
  },
  {
    path: "/zawodnicy-rs/dokumenty",
    name: "drivers-rs-documents",
    component: () => import("../views/DriversRSDocumentsView.vue"),
    meta: {
      title: "Dokumenty RS | AMG Rally Karkonosze 2026",
      description:
        "Dokumenty dla zawodników Rally Sprint AMG Rally Karkonosze 2026: regulaminy, komunikaty i pliki do pobrania.",
      breadcrumbs: [
        { name: "Strona główna", path: "/" },
        { name: "Zawodnicy RS", path: "/zawodnicy-rs" },
        { name: "Dokumenty", path: "/zawodnicy-rs/dokumenty" },
      ],
    },
  },
  {
    path: "/zawodnicy-rs/harmonogram",
    name: "drivers-rs-schedule",
    component: () => import("../views/DriversRSScheduleView.vue"),
    meta: {
      title: "Harmonogram RS | AMG Rally Karkonosze 2026",
      description:
        "Harmonogram Rally Sprint AMG Rally Karkonosze 2026: kluczowe godziny, etapy wydarzenia i organizacja dnia zawodów.",
      breadcrumbs: [
        { name: "Strona główna", path: "/" },
        { name: "Zawodnicy RS", path: "/zawodnicy-rs" },
        { name: "Harmonogram", path: "/zawodnicy-rs/harmonogram" },
      ],
    },
  },
  {
    path: "/zawodnicy-rs/tablica",
    name: "drivers-rs-notice-board",
    component: () => import("../views/DriversNoticeBoardView.vue"),
    props: {
      board: "rs",
      seriesLabel: "AMG Rally Karkonosze 2026 - Rally Sprint",
      pageTitle: "Zawodnicy - RS",
      pageDescription:
        "Elektroniczna Tablica Ogłoszeń dla zawodników Rally Sprint. Komunikaty, dokumenty i publikacje organizatora pobierane są na żywo z systemu tablicy ogłoszeń.",
      backPath: "/zawodnicy-rs",
      backLabel: "Powrót do strefy zawodników RS",
      logos: [
        {
          src: "/assets/cycles/rpp.webp",
          alt: "Rajdowy Puchar Południa",
        },
      ],
    },
    meta: {
      title: "Elektroniczna Tablica Ogłoszeń RS | AMG Rally Karkonosze 2026",
      description:
        "Elektroniczna Tablica Ogłoszeń dla zawodników Rally Sprint AMG Rally Karkonosze 2026: komunikaty, dokumenty i publikacje organizatora.",
      breadcrumbs: [
        { name: "Strona główna", path: "/" },
        { name: "Zawodnicy RS", path: "/zawodnicy-rs" },
        {
          name: "Elektroniczna Tablica Ogłoszeń",
          path: "/zawodnicy-rs/tablica",
        },
      ],
    },
  },
  {
    path: "/kibice",
    name: "fans",
    component: () => import("../views/FansView.vue"),
    meta: {
      title: "Kibice | AMG Rally Karkonosze 2026",
      description:
        "Strefa kibica AMG Rally Karkonosze 2026: praktyczne informacje, zasady bezpieczeństwa i wskazówki dla osób oglądających rajd.",
      breadcrumbs: [
        { name: "Strona główna", path: "/" },
        { name: "Kibice", path: "/kibice" },
      ],
    },
  },
  {
    path: "/kibice/bezpiecznie",
    name: "fans-safety",
    component: () => import("../views/FansSafetyView.vue"),
    meta: {
      title: "Bezpieczeństwo kibiców | AMG Rally Karkonosze 2026",
      description:
        "Zasady bezpiecznego kibicowania podczas AMG Rally Karkonosze 2026. Sprawdź, jak oglądać rajd odpowiedzialnie i zgodnie z zaleceniami organizatora.",
      breadcrumbs: [
        { name: "Strona główna", path: "/" },
        { name: "Kibice", path: "/kibice" },
        { name: "Bezpiecznie", path: "/kibice/bezpiecznie" },
      ],
    },
  },
  {
    path: "/partnerzy",
    name: "partners",
    component: () => import("../views/PartnersView.vue"),
    meta: {
      title: "Partnerzy | AMG Rally Karkonosze 2026",
      description:
        "Partnerzy i sponsorzy AMG Rally Karkonosze 2026. Poznaj marki i instytucje wspierające wydarzenie.",
      breadcrumbs: [
        { name: "Strona główna", path: "/" },
        { name: "Partnerzy", path: "/partnerzy" },
      ],
    },
  },
  {
    path: "/lokalizacje",
    name: "locations",
    component: () => import("../views/LocationsView.vue"),
    meta: {
      title: "Lokalizacje | AMG Rally Karkonosze 2026",
      description:
        "Mapa i lokalizacje związane z AMG Rally Karkonosze 2026. Sprawdź, gdzie odbywają się kluczowe punkty wydarzenia.",
      breadcrumbs: [
        { name: "Strona główna", path: "/" },
        { name: "Lokalizacje", path: "/lokalizacje" },
      ],
    },
  },
  {
    path: "/kontakt",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
    meta: {
      title: "Kontakt | AMG Rally Karkonosze 2026",
      description:
        "Kontakt do organizatora AMG Rally Karkonosze 2026. Dane organizacyjne i adres e-mail biura rajdu.",
      schemaType: "ContactPage",
      breadcrumbs: [
        { name: "Strona główna", path: "/" },
        { name: "Kontakt", path: "/kontakt" },
      ],
    },
  },
];

export function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) return savedPosition
  if (to.hash) return { el: to.hash, behavior: 'smooth' }
  return { top: 0 }
}
