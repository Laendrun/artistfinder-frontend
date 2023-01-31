<script setup>
	import { useI18n } from 'vue-i18n'

	const { t } = useI18n({
		fallbackWarn: false,
		inheritLocale: true,
		useScope: 'local'
	})

	const link = window.location.href

	const copyLink = () => {
		navigator.clipboard.writeText(t('global.shareText') + link)
		.then(() => {
			document.getElementById('shareBtn').innerText = t('global.copied')
			setTimeout(() => {
				document.getElementById('shareBtn').innerHTML = t('global.copyLink')
			}, 2000);
		})
	}
</script>

<!-- <template>
<div class="modal" id="shareModal" tabindex="-1" role="dialog">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">{{ t('global.share') }}</h5>
			</div>
			<div class="modal-body">
				<div class="row justify-content-between">
					<div class="col-md-4">
						<button class="btn btn-primary" id="shareBtn" @click="copyLink()">
							{{ t('global.copyLink') }}
						</button>
					</div>
					<div class="col-md-4">
						<a :href="`whatsapp://send?text=${t('global.shareText')}${link}`" class="btn btn-primary">
							<font-awesome-icon icon="fa-brands fa-whatsapp" />
							{{ t('global.shareWhatsapp') }}
						</a>
					</div>
				</div>
				<div class="row justify-content-between">
					<div class="col-md-4">
						<a href="https://t.me/share/url?url={url}&text={text}" class="btn btn-primary">
							<font-awesome-icon icon="fa-brands fa-telegram" />
							{{ t('global.shareTelegram') }}
						</a>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-primary" data-dismiss="modal">{{ t('global.close') }}</button>
			</div>
		</div>
	</div>
</div>
</template> -->

<template>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#shareModal">
	<font-awesome-icon icon="fa-regular fa-share-from-square" />
	{{ t('global.share') }}
</button>
<div class="modal fade" id="shareModal" tabindex="-1" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="myModelLabel">{{ t('global.share') }}</h5>
			</div>
			<div class="modal-body">
				<p>{{ t('global.shareVia') }}</p>
				<div class="d-flex align-items-center icons">
					<a :href="`whatsapp://send?text=${t('global.shareText')}${link}`" class="d-flex align-items-center btn justify-content-center">
						<font-awesome-icon size="2x" icon="fa-brands fa-whatsapp" />
					</a>
					<a :href="`https://t.me/share/url?url=${link}&text=${t('global.shareText')}`" class="d-flex align-items-center btn justify-content-center">
						<font-awesome-icon size="2x" icon="fa-brands fa-telegram" />
					</a>
				</div>
				<p>{{ t('global.orCopy') }}</p>
				<div class="form-control d-flex align-items-center justify-content-between">
					<input type="text" class="form-control" :value="link">
					<button class="btn btn-small" id="shareBtn" @click="copyLink()">{{ t('global.copyLink') }}</button>
				</div>
			</div>
		</div>
	</div>
</div>
</template>