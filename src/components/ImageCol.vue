<script setup>
	import { defineProps } from 'vue'

	defineProps({
		src: {
			type: String
		},
		alt: {
			type: String
		}
	})
</script>

<template>
	<div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
		<img
		:src="src"
		class="w-100 shadow-1-strong rounded mb-4"
		:alt="alt"
		/>
	</div>
</template>

<style scoped></style>