import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import router from './router/router.js'
import vue3GoogleLogin from 'vue3-google-login'
import i18n from './i18n'

import { library } from "@fortawesome/fontawesome-svg-core"
import { faGithub, faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

router.beforeEach((to, from) => {
	from
	let language = to.params.lang;
	if (!language)
	language = 'fr'
	i18n.global.locale.value = language
})

library.add(faGithub, faWhatsapp, faTelegram, faShareFromSquare, faLink)
const app = createApp(App).use(i18n).component("font-awesome-icon", FontAwesomeIcon);
app.use(router)
app.use(vue3GoogleLogin, {
	clientId: '475355472399-91pnjujdun95tchfln0o8o73grb8uft0.apps.googleusercontent.com'
})
app.mount('#app')
