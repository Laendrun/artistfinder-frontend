<script setup>
	import { useI18n } from 'vue-i18n'
	const { t } = useI18n({
		inheritLocale: true,
		useScope: 'local'
	})
</script>

<template>
	<!-- only visible on md and up -->
	<div class="container d-none d-md-block">
		<div class="row">
			<div class="col md-3">
				<p>{{ t('home_search_bar.i_am') }}</p>
			</div>
			<div class="col md-3">
				<select>
					<option>un artiste</option>
					<option>un particulier</option>
					<option>un bar</option>
					<option>un restaurant</option>
				</select>
			</div>
			<div class="col md-3">
				<p>{{ t('home_search_bar.look_for') }}</p>
			</div>
			<div class="col md-3">
				<select>
					<option>un photographe</option>
					<option>un musicien</option>
					<option>un dj</option>
					<option>un groupe de musique</option>
					<option>un restaurant</option>
					<option>une galerie</option>
				</select>
			</div>
		</div>
		<div class="row">
			<div class="col md-3">
				<p>{{ t('home_search_bar.in') }}</p>
			</div>
			<div class="col md-3">
				<select>
					<option>Lausanne (et alentours)</option>
					<option>Fribourg (et alentours)</option>
					<option>Genève (et alentours)</option>
				</select>
			</div>
			<div class="col md-3">
				<p>{{ t('home_search_bar.for') }}</p>
			</div>
			<div class="col md-3">
				<select>
					<option>dates...</option>
				</select>
			</div>
		</div>
		<div class="row">
			<div class="col md-3">
				<button class="btn btn-primary btn-small">{{ t('home_search_bar.search') }}</button>
			</div>
		</div>
	</div>
	<!-- only visible on xs and sm -->
	<div class="container d-md-none d-lg-none d-xl-none">
		<div class="row">
			<div class="col-sm-12">
				<p>{{ t('home_search_bar.i_am') }}</p>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<select>
					<option>un artiste</option>
					<option>un particulier</option>
					<option>un bar</option>
					<option>un restaurant</option>
				</select>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<p>{{ t('home_search_bar.look_for') }}</p>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<select>
						<option>un photographe</option>
						<option>un musicien</option>
						<option>un dj</option>
						<option>un groupe de musique</option>
						<option>un restaurant</option>
						<option>une galerie</option>
				</select>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<p>{{ t('home_search_bar.in') }}</p>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<select>
					<option>Lausanne (et alentours)</option>
					<option>Fribourg (et alentours)</option>
					<option>Genève (et alentours)</option>
				</select>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<p>{{ t('home_search_bar.for') }}</p>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<select>
					<option>dates...</option>
				</select>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col sm-3">
				<button class="btn btn-primary btn-small">{{ t('home_search_bar.search') }}</button>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
