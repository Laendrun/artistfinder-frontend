<script setup>
	import i18n from '@/i18n'
	import router from '@/router/router';
	const setLocale = (locale) => {
		i18n.global.locale.value = locale
		router.push({
			params: {lang: locale}
		})
	}
</script>

<template>
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	<img height="15" :src="`/flags/${$i18n.locale}_flag.svg`" /> {{ $i18n.locale.toUpperCase() }}
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
	<a	v-for="lang in $i18n.availableLocales" 
		v-bind:key="lang" 
		class="dropdown-item" 
		href="#"
		@click.prevent="setLocale(lang)"
		>
		<img height="15" :src="`/flags/${lang}_flag.svg`" />
		{{ lang.toUpperCase() }}
	</a>
  </div>
</div>
</template>

<style scoped>
</style>