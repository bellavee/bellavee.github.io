<script>
import Card from '../../components/Card.svelte';
import se_1 from '$lib/assets/project/websites/se_1.png';
import b_1 from '$lib/assets/project/websites/b_1.png';
import p_1 from '$lib/assets/project/websites/p_1.png';

let fileData = [
	{
		title: 'Bella Sekai',
		description: 'My website for selling digital products.',
		tags: 'SvelteKit, Tailwind CSS, Pocketbase',
		image: { url: b_1, alt: 'Screenshot of Bella Store' },
		link: 'https://game.bellasekai.com',
		video: ''
	},
	{
		title: 'Portfolio',
		description: 'I designed and built my portfolio.',
		tags: 'Svelte, Tailwind CSS',
		image: { url: p_1, alt: 'Screenshot of Portfolio' },
		link: 'https://bellavee.github.io/',
		video: ''
	},
	{
		title: 'Schedule Employees’',
		description: 'Scheduled employees’ work hours for multi-restaurant.',
		tags: 'Java, Spring Boot, Thymeleaf, Bootstrap, HTMX, PostgreSQL, Keycloak, Docker',
		image: { url: se_1, alt: 'Screenshot of Schedule Employees’' },
		link: '',
		video: ''
	},
	{
		title: 'Twitter Alarm',
		description: 'Alerted words, hashtags that you want to follow on Twitter.',
		tags: 'React, Tailwind CSS, Express.js, MongoDB',
		video: 'https://drive.google.com/file/d/1_SOVTC7mPovOC_uM5I2-LCKJpr5ihcvn/preview',
		link: 'https://github.com/Finn-Vee-Axel-Mat/twitter-alarm',
		image: { url: '', alt: '' }
	}
]
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
	
	{#each fileData as file}
		<Card 
			fileData={file} />
	
	{/each}
</div>
