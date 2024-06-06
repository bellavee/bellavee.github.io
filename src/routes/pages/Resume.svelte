<script>
	import SmallCard from '../components/SmallCard.svelte';

	import { base } from '$app/paths';

	let resume_fr = `${base}/pdf/resume_bella_fra_v1.pdf`;
	let resume_eng = `${base}/pdf/resume_bella_eng_v1.pdf`;

</script>

<div class="mx-4 sm:mx-auto max-w-screen-xl 2xl:max-w-screen-2xl py-20">
	<h1 class="mb-8 text-white font-semibold text-4xl">Resume</h1>

	<div class="flex flex-wrap items-center gap-4 justify-start mb-4">
		<SmallCard
			title="French"
			description="Last updated: 6 June 2024"
			link={resume_fr}
		/>

		<SmallCard
			title="English"
			description="Last updated: 6 June 2024"
			link={resume_eng}
		/>
	</div>	
</div>
