<script setup>
	import LocalSwitcher from './LocalSwitcher.vue'
	import { useI18n } from 'vue-i18n'

	const { t } = useI18n({
		inheritLocale: true,
		useScope: 'local'
	})
</script>

<style lang="scss">

	@import '../../node_modules/bootstrap/scss/bootstrap.scss';
	
	.navbarComp {
		display: block;
		margin-bottom: 10vh;
	}
	.nav-router-link {
		margin-left: 1vh;
		margin-right: 1vh;
		color: #0ed66d !important;
	}
	.localeSwitcher {
		margin-left: auto;
		margin-right: 3vh;
	}

</style>

<template>
	<div class="navbarComp">
		<nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
			<RouterLink :to="`/${$i18n.locale}/`" class="navbar-brand">Artistfinder</RouterLink>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="mainNav">
				<RouterLink :to="`/${$i18n.locale}/artists`" class="nav-link nav-router-link">
					{{ t('nav.navbar.artists') }}
				</RouterLink>
				<LocalSwitcher class="localeSwitcher" />
			</div>
		</nav>
	</div>
</template>