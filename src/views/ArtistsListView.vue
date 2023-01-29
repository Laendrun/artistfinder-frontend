<script setup>
	import ArtistCard from '@/components/ArtistCard.vue'
	import { onMounted } from 'vue'
	import { useI18n } from 'vue-i18n'

	const { t } = useI18n({
		fallbackWarn: false,
		inheritLocale: true,
		useScope: 'local'
	})

	const getData = async() => {
		let artistData = await fetch('https://api.artistfinder.world/api/v1/artists/verified', {
		method: 'GET',
		});
		let artistJson = await artistData.json();
		return artistJson;
	}

	const artists = await getData()
	console.log(artists);
	onMounted(() => {
		document.title = t('artistsList.title')
	})

</script>

<template>
	<div class="container">
		<div class="row" id="artistsCards">
			<ArtistCard class="my-3" v-for="artist in artists" v-bind:key="artist.artist_id" :artist=artist />
		</div>
	</div>
</template>

<style lang="scss" scoped>

	@import '../../node_modules/bootstrap/scss/bootstrap.scss';
	#artistsCards {
		@include row-cols(1);
		@include media-breakpoint-up(md) {
		@include row-cols(2);
		}
		@include media-breakpoint-up(lg) {
		@include row-cols(3)
		}
	}
</style>
