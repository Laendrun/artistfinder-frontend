<script setup>
	import router from '@/router/router';
	import { defineProps } from 'vue'
	import i18n from '@/i18n'
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

	const go_to = (id) => {
		router.push(`/${i18n.global.locale.value}/artists/${id}`)
	}
</script>

<template>
	<div class="row">
		<div class="col-sm-1"></div>
		<div class="col-sm-10">
			<div class="card">
				<img class="card-img-top" src="@/assets/accoustic_guitar.jpg" alt="">
				<div class="card-body">
					<h5 class="card-title">{{ artist.artist_name }}</h5>
					<p class="card-text">{{ t('styles.style') }}: {{ t(`styles.style_${artist.style_id}`) }}</p>
					<p class="card-text">{{ t('types.type') }}: {{ t(`types.type_${artist.type_id}`) }}</p>
					<a @click="go_to(artist.artist_id)" class="btn btn-primary">{{ t('artistListCard.see_profile') }}</a>
				</div>
			</div>
		</div>
		<div class="col-sm-1"></div>
	</div>
</template>

<style scoped>
</style>