import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    {
      path: "/o-rajdzie",
      name: "about-rally",
      component: () => import("../views/AboutRallyView.vue"),
    },
    {
      path: "/aktualnosci",
      name: "news",
      component: () => import("../views/NewsView.vue"),
    },
    {
      path: "/aktualnosci/1",
      name: "news-article-1",
      component: () => import("../views/NewsArticle1View.vue"),
    },
    {
      path: "/zawodnicy-ro",
      name: "drivers-ro",
      component: () => import("../views/DriversROView.vue"),
    },
    {
      path: "/zawodnicy-ro/dokumenty",
      name: "drivers-ro-documents",
      component: () => import("../views/DriversRODocumentsView.vue"),
    },
    {
      path: "/zawodnicy-ro/harmonogram",
      name: "drivers-ro-schedule",
      component: () => import("../views/DriversROScheduleView.vue"),
    },
    {
      path: "/zawodnicy-rs",
      name: "drivers-rs",
      component: () => import("../views/DriversRSView.vue"),
    },
    {
      path: "/zawodnicy-rs/dokumenty",
      name: "drivers-rs-documents",
      component: () => import("../views/DriversRSDocumentsView.vue"),
    },
    {
      path: "/zawodnicy-rs/harmonogram",
      name: "drivers-rs-schedule",
      component: () => import("../views/DriversRSScheduleView.vue"),
    },
    {
      path: "/kibice",
      name: "fans",
      component: () => import("../views/FansView.vue"),
    },
    {
      path: "/kibice/bezpiecznie",
      name: "fans-safety",
      component: () => import("../views/FansSafetyView.vue"),
    },
    {
      path: "/partnerzy",
      name: "partners",
      component: () => import("../views/PartnersView.vue"),
    },
    {
      path: "/lokalizacje",
      name: "locations",
      component: () => import("../views/LocationsView.vue"),
    },
    {
      path: "/kontakt",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return { top: 0 };
  },
});

export default router
