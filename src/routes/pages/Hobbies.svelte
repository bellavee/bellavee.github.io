<script>
	import Button from '../components/Button.svelte';
	import Games from './hobbies/Games.svelte';

	import game from '$lib/assets/icon/game.png'
	import web from '$lib/assets/icon/web.png'
	import SNS from './hobbies/SNS.svelte';
	import Heading from '../components/Heading.svelte';

	let activePage = 'Games';
	function setActivePage(page) {
		activePage = page;
	}

</script>

<div class="mx-4 sm:mx-auto max-w-screen-xl 2xl:max-w-screen-2xl py-20">
	<Heading label="Play with me">
		
	<div class="flex flex-wrap items-center gap-4 justify-start mb-4">
		<Button
			label="Games"
			iconSrc={game}
			active={activePage === 'Games'}
			onClick={() => setActivePage('Games')} />
		<Button
			label="YouTube"
			iconSrc={web}
			active={activePage === 'Websites'}
			onClick={() => setActivePage('Websites')} />
	</div>

	{#if activePage === 'Websites'}
		<SNS/>
	{:else if activePage === 'Games'}
		<Games/>
	{/if}
</div>
