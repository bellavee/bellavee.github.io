<script>
import Card from '../../components/Card.svelte';
import dg_1 from '$lib/assets/project/games/dg_1.jpg'
import dg_2 from '$lib/assets/project/games/dg_2.jpg'
import pp_1 from '$lib/assets/project/games/pp_1.png'
import pp_2 from '$lib/assets/project/games/pp_2.png'
import rb_1 from '$lib/assets/project/games/rb_1.png'
import rb_2 from '$lib/assets/project/games/rb_2.png'

let fileData = [
	{
		title: 'Outbreak: Endless Runner',
		description: 'Endless runner game using Unreal Engine C++ and Blueprint.',
		tags: 'Unreal Engine 5, C++, Blueprint',
		video: 'https://drive.google.com/file/d/1sRH-x77rQw1dSZtipbTjHYsWLLp-M00q/preview',
		link: 'https://github.com/bellavee/outbreak_ue5cpp',
		image: { url: '', alt: '' }
	},
	{
		title: 'Tower Attack: Shaders',
		description: 'Handled graphics, lighting, effects, and post-processing.',
		tags: 'Unreal Engine 5, Blueprint, Shaders',
		video: 'https://drive.google.com/file/d/1qOjdPGvJsl8xCMskaPqXQl-NFLOiwuJr/preview',
		link: 'https://github.com/bellavee/outbreak_ue5cpp',
		image: { url: '', alt: '' }
	},
	{
		title: 'Hoyomaidre: VR Game',
		description: 'VR escape room with 4 different puzzles.',
		tags: 'Unity, C#, VR',
		video: 'https://drive.google.com/file/d/1dG1Qu6Uk02iAy-uu2fC-2p30eqKRxZ2A/preview',
		link: 'https://github.com/FreezeKaz/HoyoMairde',
		image: { url: '', alt: '' }
	},
	{
		title: 'Dungeon Explorer',
		description: '2D Top Shooter Game.',
		tags: 'Unity, C#',
		video: 'https://drive.google.com/file/d/1sjI4GDjENk_8sGZwPPnm6cyqcjW5qOXJ/preview',
		link: 'https://github.com/Red-H-Star/ProjectAI',
		image: { url: '', alt: '' }
	},
	{
		title: 'Ricochet Robots',
		description: 'Puzzle board game with a solving system using A* algorithm',
		tags: 'Java, Java Swing',
		image: { url: rb_2, alt: 'Screenshot of Ricochet Robots game' },
		link: 'https://github.com/bellavee/block-puzzle',
		video: ''
	},
	{
		title: 'PyPuzzle',
		description: 'Block puzzle game.',
		tags: 'Python, PyGame',
		image: { url: pp_2, alt: 'Screenshot of PyPuzzle game' },
		link: 'https://github.com/bellavee/block-puzzle',
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