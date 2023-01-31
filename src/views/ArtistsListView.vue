<script setup>
	import ArtistCard from '@/components/ArtistsListCard.vue'
	import { onMounted } from 'vue'
	import { useI18n } from 'vue-i18n'

	const { t } = useI18n({
		fallbackWarn: false,
		inheritLocale: true,
		useScope: 'local'
	})

	const getData = async() => {
		let artistData = await fetch('https://api.artistfinder.world/api/v2/artists/verified', {
		method: 'GET',
		});
		let artistJson = await artistData.json();
		return artistJson;
	}

	const data = await getData()
	const artists = await data.content.artists;
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
