<script setup>
	import router from '@/router/router';
	import { defineProps } from 'vue'
	import i18n from '@/i18n'
	import { useI18n } from 'vue-i18n'
	import { limit } from '@/helpers'

	const { t } = useI18n({
		inheritLocale: true,
		useScope: 'local'
	})

	defineProps({
		artist: {
			type: Object
		}
	})

	const go_to = (id) => {
		router.push(`/${i18n.global.locale.value}/artists/${id}`)
	}
</script>

<template>
	<div class="col-sm-10">
		<div class="card h-100">
			<img class="card-img-top" src="@/assets/accoustic_guitar.jpg" alt="">
			<div class="card-body">
				<h5 class="card-title">{{ artist.artist_name }} - {{ t(`types.type_${artist.type_id}`) }} - tmp: {{ artist.artist_id }}</h5>
				<p class="card-text">{{ t(`styles.style_${artist.style_id}`) }}</p>
				<p class="card-text">{{ limit(artist.artist_desc, 100) }} </p>
				<a @click="go_to(artist.artist_id)" class="btn btn-primary">{{ t('artistListCard.see_profile') }}</a>
			</div>
		</div>
	</div>
</template>

<style scoped>
</style>