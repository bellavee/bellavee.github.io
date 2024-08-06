<script>
	import Card from '../../components/Card.svelte';
	import Tag from '../../components/Tag.svelte';
	import img_gallery from '$lib/assets/project/tools/gallery.png'
	import img_account from '$lib/assets/project/tools/account.png'
	
	let fileData = [
		{
			title: 'Photo Gallery',
			description: 'An application to display images with tags.',
			tags: 'Python, Custom Tkinter',
			image: { url: img_gallery, alt: 'Screenshot of Gallery app' },
			link: 'https://github.com/bellavee/photo-gallery',
			video: ''
		},
		{
			title: 'Game Account Management',
			description: 'An application to manage accounts with basic features.',
			tags: 'Python, Tkinter',
			image: { url: img_account, alt: 'Screenshot of Account app' },
			link: '',
			video: ''
		}
	];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
	
	{#each fileData as file}
		<Card
			fileData={file}
		/>
	{/each}

</div>