<script>
	import Button from '../components/Button.svelte';
	import Games from './project/Games.svelte';
	import Websites from './project/Websites.svelte';
	import Tools from './project/Tools.svelte';

	import game from '$lib/assets/icon/game.png'
	import web from '$lib/assets/icon/web.png'
	import toolkit from '$lib/assets/icon/toolkit.png'

	let activePage = 'Games';
	function setActivePage(page) {
		activePage = page;
	}

</script>

<div class="mx-4 sm:mx-auto max-w-screen-xl 2xl:max-w-screen-2xl py-20">
	<h1 class="mb-8 text-white font-semibold text-4xl">Projects</h1>

	<div class="flex flex-wrap items-center gap-4 justify-start mb-4">
		<Button
			label="Games"
			iconSrc={game}
			active={activePage === 'Games'}
			onClick={() => setActivePage('Games')} />
		<Button
			label="Websites"
			iconSrc={web}
			active={activePage === 'Websites'}
			onClick={() => setActivePage('Websites')} />
		<Button
			label="Tools"
			iconSrc={toolkit}
			active={activePage === 'Tools'}
			onClick={() => setActivePage('Tools')} />
	</div>

	{#if activePage === 'Websites'}
		<Websites/>
	{:else if activePage === 'Games'}
		<Games/>
	{:else if activePage === 'Tools'}
		<Tools/>
	{/if}
</div>
