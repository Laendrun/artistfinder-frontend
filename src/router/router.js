import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ArtistsListView from '@/views/ArtistsListView.vue'
import i18n from '@/i18n'

const routes = [
	{
		path: '/',
		redirect: `/${i18n.global.locale.value}`
	},
	{
		path: '/:lang',
		children: [
			{
				path: '',
				name: 'home',
				component: HomeView
			},
			{
				path: 'artists',
				name: 'artists',
				component: ArtistsListView
			}
		]
	}
]

const	router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
