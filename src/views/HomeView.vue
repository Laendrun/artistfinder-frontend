<script setup>
	import HomeSearchBar from '@/components/HomeSearchBar.vue'
	import { onMounted } from 'vue'
	import { useI18n } from 'vue-i18n'

	const { t } = useI18n({
		inheritLocale: true,
		useScope: 'local'
	})

	onMounted(() => {
		document.title = t('home.title')
	})
</script>

<template>
	<HomeSearchBar />
</template>

<style scoped></style>
