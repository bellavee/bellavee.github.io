<script>
import SmallCard from '../../components/SmallCard.svelte';
import pjsk_icon from '$lib/assets/icon/pjsk-icon.png'
import gi_icon from '$lib/assets/icon/gi-icon.png'
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
	<SmallCard
		title="Project Sekai ft. Hatsune Miku"
		description="Server JP - Bella - 31045104689164302"
		iconSrc={pjsk_icon}
		link=""
	/>

	<SmallCard
		title="Genshin Impact"
		description="Server EU - Bella - 711361059"
		iconSrc={gi_icon}
		link="https://enka.network/u/711361059/"
	/>

</div>