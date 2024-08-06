<script>
import Card from '../../components/Card.svelte';
import ta_2 from '$lib/assets/project/websites/ta_2.png';
import ta_1 from '$lib/assets/project/websites/ta_1.png';
import se_1 from '$lib/assets/project/websites/se_1.png';
import se_2 from '$lib/assets/project/websites/se_2.png';
import b_1 from '$lib/assets/project/websites/b_1.png';
import p_1 from '$lib/assets/project/websites/p_1.png';

let fileData = [
	{
		title: 'Current project: Bella Game Store',
		description: 'My website for selling game accounts automatically is still in progress. You can visit the prototype at the link in the title.',
		tags: 'SvelteKit, Tailwind CSS, Pocketbase',
		image: { url: b_1, alt: 'Screenshot of Bella Store' },
		link: 'https://bella-prsk.github.io',
		video: ''
	},
	{
		title: 'Portfolio',
		description: 'My portfolio is also a website, right? I usually change the theme when I\'m bored.',
		tags: 'Svelte, Tailwind CSS',
		image: { url: p_1, alt: 'Screenshot of Portfolio' },
		link: 'https://github.com/free-lancer-france/schedule-app',
		video: ''
	},
	{
		title: 'Schedule Employees’',
		description: 'Scheduled employees’ work hours for multi-restaurant.',
		tags: 'Java, Spring Boot, Thymeleaf, Bootstrap, HTMX, PostgreSQL, Keycloak, Docker',
		image: { url: se_1, alt: 'Screenshot of Schedule Employees’' },
		link: 'https://github.com/free-lancer-france/schedule-app',
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