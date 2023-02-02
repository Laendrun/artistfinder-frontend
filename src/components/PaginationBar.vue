<script setup>
	import { defineProps } from 'vue'

	defineProps({
		tp: {
			type: Number
		},
		cp: {
			type: Number
		}
	})
</script>

<template>
	<ul class="pagination justify-content-center">

		<!-- First btn -->
		<li v-if="cp != 1" class="page-item">
			<button class="page-link" @click="$emit('goFirst')">
				<font-awesome-icon icon="fa-solid fa-angles-left" />
			</button>
		</li>
		<li v-else class="page-item disabled">
			<button class="page-link" @click="$emit('goFirst')">
				<font-awesome-icon icon="fa-solid fa-angles-left" />
			</button>
		</li>

		<!-- Prev btn -->
		<li v-if="cp != 1" class="page-item">
			<button class="page-link" @click="$emit('goPrev')">
				<font-awesome-icon icon="fa-solid fa-angle-left" />
			</button>
		</li>
		<li v-else class="page-item disabled">
			<button class="page-link" @click="$emit('goPrev')">
				<font-awesome-icon icon="fa-solid fa-angle-left" />
			</button>
		</li>


		<li class="page-item" v-for="n in tp" v-bind:key="n" >
			<button v-if="n == cp" class="page-link active" @click="$emit('goPage', (n))">{{ n }}</button>
			<button v-else class="page-link" @click="$emit('goPage', (n))">{{ n }}</button>
		</li>

		<!-- Next btn -->
		<li v-if="cp != tp" class="page-item">
			<button class="page-link" @click="$emit('goNext')">
				<font-awesome-icon icon="fa-solid fa-angle-right" />
			</button>
		</li>
		<li v-else class="page-item disabled">
			<button class="page-link" @click="$emit('goNext')">
				<font-awesome-icon icon="fa-solid fa-angle-right" />
			</button>
		</li>

		<!-- Last btn -->
		<li v-if="cp != tp" class="page-item">
			<button class="page-link" @click="$emit('goLast')">
				<font-awesome-icon icon="fa-solid fa-angles-right" />
			</button>
		</li>
		<li v-else class="page-item disabled">
			<button class="page-link" @click="$emit('goLast')">
				<font-awesome-icon icon="fa-solid fa-angles-right" />
			</button>
		</li>
	</ul>
</template>

<style scoped>
</style>