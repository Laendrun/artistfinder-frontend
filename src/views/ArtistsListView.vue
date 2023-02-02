<script setup>
	import ArtistCard from '@/components/ArtistsListCard.vue'
	import PaginationBar from '@/components/PaginationBar.vue'
	import i18n from '@/i18n';
	import router from '@/router/router'
	import ArtistsDataService from '@/services/ArtstsDataSerice'
	import { onMounted, reactive } from 'vue'
	import { useI18n } from 'vue-i18n'

	const { t } = useI18n({
		fallbackWarn: false,
		inheritLocale: true,
		useScope: 'local'
	})

	let state = reactive({
		rawData: null,
		artists: [],
		currPage: 1,
		limit: 25,
		totalPage: 0
	})

	const retrieveArtists = async (off, lim) => {
		const params = {
			"offset": off,
			"limit": lim
		}
		let artistsJSON = null;
		await ArtistsDataService.getAll(params)
		.then((response) => {
			artistsJSON = response.data
		})
		.catch(e => {
			if (e.response.status == 404)
				router.replace({ path: `/${i18n.global.locale.value}/404` })
		});
		return (artistsJSON);
	}

	state.rawData = await retrieveArtists(state.offset, state.limit);
	state.artists = state.rawData.content.artists;
	state.totalPage = Math.ceil(state.rawData.metadata.total / state.limit);

	onMounted(() => {
		document.title = t('artistsList.title')
	})

	const setPage = async (n) => {
		if (n > 0 && n <= state.totalPage)
			state.currPage = n
		state.rawData = await retrieveArtists((state.currPage - 1) * state.limit, state.limit)
		state.artists = await state.rawData.content.artists
	}

</script>

<template>
	<div class="container">
		<div class="row" id="artistsCards">
			<ArtistCard class="my-3" v-for="artist in state.artists" v-bind:key="artist.artist_id" :artist=artist />
		</div>
		<div class="row">
			<PaginationBar 
				v-if="state.totalPage != 1"
				:tp="state.totalPage"
				:cp="state.currPage"
				@goFirst="setPage(1)"
				@goPrev="setPage(state.currPage - 1)"
				@goPage="(n) => setPage(n)"
				@goNext="setPage(state.currPage + 1)"
				@goLast="setPage(state.totalPage)"
			/>
		</div>
	</div>
</template>

<style lang="scss">

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
