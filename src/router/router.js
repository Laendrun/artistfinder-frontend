import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ArtistsListView from '@/views/ArtistsListView.vue'
import ArtistCardView from '@/views/ArtistCardView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
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
				path: 'artists/',
				name: 'artists',
				component: ArtistsListView
			},
			{
				path: 'artists/:id',
				name: 'artist',
				component: ArtistCardView
			},
			{
				path: '404',
				name: 'notFoudn',
				component: NotFoundView
			}
		]
	}
]

const	router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
