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

<template>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#shareModal">
	<font-awesome-icon icon="fa-regular fa-share-from-square" />
	{{ t('global.share') }}
</button>
<div class="modal" id="shareModal" tabindex="-1" role="dialog">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">{{ t('global.share') }}</h5>
			</div>
			<div class="modal-body">
				<div class="row justify-content-between">
					<div class="col-md-6">
						<!-- Copy link button -->
						<button class="btn btn-primary" id="shareBtn" @click="copyLink()">
							{{ t('global.copyLink') }}
						</button>
					</div>
					<div class="col-md-6">
						<!-- Share on whatsapp button -->
						<a :href="`whatsapp://send?text=${t('global.shareText')}${link}`" class="btn btn-primary">
							<font-awesome-icon icon="fa-brands fa-whatsapp" />
							{{ t('global.shareWhatsapp') }}
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
</template>