<script>
import SmallCard from '../../components/SmallCard.svelte';
import youtube_icon from '$lib/assets/icon/youtube.svg'
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
	<SmallCard
		title="punpunie ch."
		description="MMD & Gaming channel"
		iconSrc={youtube_icon}
		link="https://www.youtube.com/@punpunie"
	/>

	<SmallCard
		title="belololo"
		description="Piano cover channel"
		iconSrc={youtube_icon}
		link="https://www.youtube.com/@belololo"
	/>
</div>