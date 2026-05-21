import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { allNews } from '../src/data/news.js'
import { allStages } from "../src/data/stages.js";

const SITE_URL = 'https://rallykarkonosze.pl'

const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/o-rajdzie', changefreq: 'monthly', priority: '0.8' },
  { path: '/aktualnosci', changefreq: 'weekly', priority: '0.9' },
  { path: '/zawodnicy-ro', changefreq: 'weekly', priority: '0.8' },
  { path: '/zawodnicy-ro/dokumenty', changefreq: 'weekly', priority: '0.7' },
  { path: '/zawodnicy-ro/harmonogram', changefreq: 'weekly', priority: '0.7' },
  { path: '/zawodnicy-rs', changefreq: 'weekly', priority: '0.8' },
  { path: '/zawodnicy-rs/dokumenty', changefreq: 'weekly', priority: '0.7' },
  { path: '/zawodnicy-rs/harmonogram', changefreq: 'weekly', priority: '0.7' },
  { path: '/kibice', changefreq: 'weekly', priority: '0.8' },
  { path: '/kibice/bezpiecznie', changefreq: 'monthly', priority: '0.6' },
  { path: '/partnerzy', changefreq: 'monthly', priority: '0.6' },
  { path: '/lokalizacje', changefreq: 'monthly', priority: '0.7' },
  { path: '/kontakt', changefreq: 'yearly', priority: '0.5' },
]

const newsRoutes = allNews.map((article) => ({
  path: article.url,
  changefreq: 'monthly',
  priority: '0.6',
  lastmod: article.modifiedAt,
}))

const stageRoutes = allStages.map((stage) => ({
  path: stage.path,
  changefreq: "weekly",
  priority: "0.7",
}));

const allRoutes = [...staticRoutes, ...newsRoutes, ...stageRoutes];

function toAbsoluteUrl(path) {
  return new URL(path, SITE_URL).toString()
}

function renderUrlEntry(route) {
  const lines = [
    '  <url>',
    `    <loc>${toAbsoluteUrl(route.path)}</loc>`,
  ]

  if (route.lastmod) {
    lines.push(`    <lastmod>${route.lastmod}</lastmod>`)
  }

  lines.push(`    <changefreq>${route.changefreq}</changefreq>`)
  lines.push(`    <priority>${route.priority}</priority>`)
  lines.push('  </url>')

  return lines.join('\n')
}

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  '',
  allRoutes.map(renderUrlEntry).join('\n\n'),
  '',
  '</urlset>',
  '',
].join('\n')

writeFileSync(resolve('public/sitemap.xml'), xml, 'utf8')