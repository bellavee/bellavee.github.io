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
			link: 'https://github.com/bellavee/python-scripts',
			video: ''
		},
		{
			title: 'Game Account Management',
			description: 'An application to manage accounts.',
			tags: 'Python, Tkinter',
			image: { url: img_account, alt: 'Screenshot of Account app' },
			link: 'https://github.com/bellavee/python-scripts',
			video: ''
		},
		{
			title: 'Autoclick',
			description: 'Autoclick for a game to read/skip event story.',
			tags: 'Python',
			image: '',
			link: 'https://github.com/bellavee/python-scripts',
			video: ''
		},
		{
			title: 'EPUB from TXT',
			description: 'Make EPUB from TXT and customize TXT file.',
			tags: 'Python',
			image: '',
			link: 'https://github.com/bellavee/python-scripts',
			video: ''
		},
		{
			title: 'PNG to JPG Converter',
			description: 'PNG to JPG Converter.',
			tags: 'Python',
			image: '',
			link: 'https://github.com/bellavee/python-scripts',
			video: ''
		},
		{
			title: 'JSON Generator',
			description: 'Generate images JSON in a folder.',
			tags: 'Python',
			image: '',
			link: 'https://github.com/bellavee/python-scripts',
			video: ''
		},
		{
			title: 'OCR on images',
			description: 'Perform OCR on all images in the specified directory and save the results as text files using Tesseract OCR.',
			tags: 'Python',
			image: '',
			link: 'https://github.com/bellavee/python-scripts',
			video: ''
		},

	];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
	
	{#each fileData as file}
		<Card
			fileData={file}
		/>
	{/each}

</div>
