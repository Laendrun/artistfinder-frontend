<script setup>
	import ArtistCard from '@/components/ArtistCard.vue'
	import { onMounted } from 'vue'

	onMounted(() => {
		document.title = 'Liste Artistes'
	})

	const artist = {
		"name":"Test"
	}
</script>

<template>
	<ArtistCard :artist=artist />
</template>

<style scoped></style>
