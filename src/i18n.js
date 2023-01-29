import { createI18n } from 'vue-i18n'
import messages from "@/locales/messages"

export default new createI18n({
	legacy: false,
	locale: 'en', // set locale
	messages, // set locale messages
})
