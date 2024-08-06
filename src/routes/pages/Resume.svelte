<script>
	import SmallCard from '../components/SmallCard.svelte';

	import { base } from '$app/paths';
	import Heading from '../components/Heading.svelte';

	let resume_fr = `${base}/pdf/resume_bella_fra.pdf`;
	let resume_eng = `${base}/pdf/resume_bella_eng.pdf`;
	
	let fileData = [
		{
			title: "French",
			description: "Last updated: 6 August 2024",
			link: resume_fr
		},
		{
			title: "English",
			description: "Last updated: 6 August 2024",
			link: resume_eng
		},
	];

</script>

<div class="mx-4 sm:mx-auto max-w-screen-xl 2xl:max-w-screen-2xl py-20">
	<Heading label="Resume"/>

	<div class="mt-4 grid grid-cols-2 gap-4">

		{#each fileData as data}
			<SmallCard
				fileData={data}
			/>
		{/each}
		
	</div>	
</div>
