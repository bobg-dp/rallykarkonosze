import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes, scrollBehavior } from './router/index.js'
import './assets/main.css'
import { allNews } from './data/news.js'

export const createApp = ViteSSG(App, { routes, scrollBehavior })

export function includedRoutes(paths) {
	const staticPaths = paths.filter(
		(path) => !path.includes(':') && path !== '/aktualnosci/1',
	)

	return [...new Set([...staticPaths, ...allNews.map((article) => article.url)])]
}
