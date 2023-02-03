<script setup>
import { defineProps } from 'vue'

	defineProps({
		tp: {
			type: Number
		},
		cp: {
			type: Number
		},
		so: {
			type: Number
		},
		max: {
			type: Number
		}
	})

</script>

<template>

	<ul class="pagination justify-content-center">
		<!-- if current page is more than 1, show previous and first buttons -->
		<li v-if="cp > 1" class="page-item">
			<button class="page-link" @click="$emit('goPage', (1))">
				<font-awesome-icon icon="fa-solid fa-angles-left" />
			</button>
		</li>
		<li v-else class="page-item disabled">
			<button class="page-link">
				<font-awesome-icon icon="fa-solid fa-angles-left" />
			</button>
		</li>
		<li v-if="cp > 1" class="page-item">
			<button class="page-link" @click="$emit('goPage', (cp - 1))">
				<font-awesome-icon icon="fa-solid fa-angle-left" />
			</button>
		</li>
		<li v-else class="page-item disabled">
			<button class="page-link">
				<font-awesome-icon icon="fa-solid fa-angle-left" />
			</button>
		</li>

		<li class="page-item" v-for="n in so + max" v-bind:key="n" >
			<button v-if="n + so == cp && n + so <= tp" class="page-link active" @click="$emit('goPage', (n + so))">{{ n + so }}</button>
			<button v-else-if="n + so <= tp" class="page-link" @click="$emit('goPage', (n + so))">{{ n + so }}</button>
		</li>

		<li v-if="cp < tp" class="page-item">
			<button class="page-link" @click="$emit('goPage', (cp + 1))">
				<font-awesome-icon icon="fa-solid fa-angle-right" />
			</button>
		</li>
		<li v-else class="page-item disabled">
			<button class="page-link">
				<font-awesome-icon icon="fa-solid fa-angle-right" />
			</button>
		</li>
		<li v-if="cp < tp" class="page-item">
			<button class="page-link" @click="$emit('goPage', (tp))">
				<font-awesome-icon icon="fa-solid fa-angles-right" />
			</button>
		</li>
		<li v-else class="page-item disabled">
			<button class="page-link">
				<font-awesome-icon icon="fa-solid fa-angles-right" />
			</button>
		</li>
	</ul>
</template>

<style scoped>
</style>