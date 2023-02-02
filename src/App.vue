<script setup>
	import NavbarComp from '@/components/NavbarComp.vue'
	import FooterComp from '@/components/FooterComp.vue'
</script>

<template>
	<NavbarComp />
	<Suspense>
		<router-view />
	</Suspense>
	<FooterComp />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>

<style lang="scss">
	$theme-colors: (
		"primary": #0ed66d,
	);
	$primary: #0ed66d;

	@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>