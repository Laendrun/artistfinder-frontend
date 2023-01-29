<script setup>
	import { defineProps } from 'vue'

	defineProps({
		artist: {
			type: Object
		}
	})
</script>

<template>
	<p>{{ artist.name }}</p>
</template>

<style scoped>
</style>