<script>
	import Card from '../../components/Card.svelte';
	import Tag from '../../components/Tag.svelte';
	import img_gallery from '$lib/assets/project/tools/gallery.png'
	import img_account from '$lib/assets/project/tools/account.png'
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
	<Card
		title="Photo Gallery"
		tags={['Python', 'Custom Tkinter']}
		description="An application to display images with tags."
		image={{ url: img_gallery, alt: 'Screenshot of Gallery app' }}
		githubLink=""
	/>

	<Card
		title="Game Account Management"
		tags={['Python', 'Tkinter']}
		description="An application to manage accounts with basic features."
		image={{ url: img_account, alt: 'Screenshot of Account app' }}
		githubLink=""
	/>

</div>