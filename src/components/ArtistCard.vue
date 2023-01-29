<script setup>
	import { defineProps } from 'vue'

	import { useI18n } from 'vue-i18n'

	const { t } = useI18n({
		inheritLocale: true,
		useScope: 'local'
	})

	defineProps({
		artist: {
			type: Object
		}
	})
</script>

<template>
<div class="card" style="width: 18rem;">
	<img class="card-img-top" src="@/assets/accoustic_guitar.jpg" alt="Card image cap">
	<div class="card-body">
		<h5 class="card-title">{{ artist.artist_name }}</h5>
		<p class="card-text">{{ t('styles.style') }}: {{ t(`styles.style_${artist.style_id}`) }}</p>
		<p class="card-text">{{ t('types.type') }}: {{ t(`types.type_${artist.type_id}`) }}</p>
		<a href="#" class="btn btn-primary">{{ t('artistCard.see_profile') }}</a>
	</div>
</div>
</template>

<style scoped>
</style>