import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			api: '/src/api',
			assets: '/src/assets',
			pages: '/src/pages',
			components: '/src/components',
			styles: '/src/styles',
			store: '/src/store'
		}
	},
	base: '/at-work/'
})
