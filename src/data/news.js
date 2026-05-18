const newsArticles = [
  {
    id: 1,
    slug: "otwarto-zapisy-na-amg-rally-karkonosze-2026",
    title: "Otwarto zapisy na AMG Rally Karkonosze 2026",
    excerpt:
      "Z przyjemnością informujemy, że ruszyły oficjalne zapisy dla zawodników na pierwszą rundę Rajdowych Samochodowych Mistrzostw Dolnego Śląska.",
    category: "Zapisy",
    breadcrumbLabel: "Zapisy 2026",
    dateLabel: "18 maja 2026",
    publishedAt: "2026-05-18",
    modifiedAt: "2026-05-18",
    image: "/assets/news/news1.webp",
    body: [
      "Z przyjemnością informujemy, że ruszyły oficjalne zapisy dla zawodników na pierwszą rundę Rajdowych Samochodowych Mistrzostw Dolnego Śląska – AMG Rally Karkonosze 2026. Rajd odbędzie się w dniach 13–14 czerwca 2026 roku w Jeleniej Górze.",
      "Zawodnicy mogą startować w klasach Rajdu Okręgowego (RO) oraz Rally Sprint (RS). Zapisy przyjmowane są przez oficjalny system zgłoszeń. Biuro Rajdu i Odbiory Administracyjne odbędą się zgodnie z harmonogramem opublikowanym na stronie.",
      "Szczegóły i procedura zapisów opisane są w regulaminie.",
    ],
    ctas: [
      {
        label: "Harmonogram RO",
        to: "/zawodnicy-ro/harmonogram",
        theme: "dark",
      },
      {
        label: "Harmonogram RS",
        to: "/zawodnicy-rs/harmonogram",
        theme: "yellow",
      },
    ],
  },
];

function withUrl(article) {
  return {
    ...article,
    url: `/aktualnosci/${article.slug}`,
    date: article.dateLabel,
  };
}

export const allNews = newsArticles.map(withUrl);

export function getLatestNews(limit = 3) {
  return allNews.slice(0, limit);
}

export function getNewsArticleBySlug(slug) {
  return allNews.find((article) => article.slug === slug);
}