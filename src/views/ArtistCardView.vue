<script setup>
	import { onMounted } from 'vue'
	import { useRoute } from 'vue-router'
	import { useI18n } from 'vue-i18n'
	import ImageCol from '@/components/ImageCol.vue'
	import ShareModal from '@/components/ShareModal.vue'

	const { t } = useI18n({
		fallbackWarn: false,
		inheritLocale: true,
		useScope: 'local'
	})

	const route = useRoute()

	const getData = async() => {
		let artistData = await fetch(`https://api.artistfinder.world/api/v2/artists/verified/${route.params.id}`, {
		method: 'GET',
		});
		let artistJson = await artistData.json();
		return artistJson;
	}

	const data = await getData()
	const artist = data.content.artist
	onMounted(() => {
		document.title = t('artistCard.title')
	})
</script>

<template>
	<div>
		<div class="container">
			<div class="row justify-content-between">
				<div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
					<h1 class="text-left">{{ artist.artist_name }}</h1>
					<p>{{ t(`types.type_${artist.type_id}`) }}</p>
				</div>
				<div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
					<ShareModal />
				</div>
			</div>
			<div class="row">
				<ImageCol src="https://picsum.photos/1000/1000" alt="" />
			</div>
			<div class="row">
				<div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
					<h2>{{ t('artistCard.descTitle') }}</h2>
					<p>{{ artist.artist_desc }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>