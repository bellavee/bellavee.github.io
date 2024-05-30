<script>
import Card from '../../components/Card.svelte';
import dg_1 from '$lib/assets/project/games/dg_1.jpg'
import dg_2 from '$lib/assets/project/games/dg_2.jpg'
import pp_1 from '$lib/assets/project/games/pp_1.png'
import pp_2 from '$lib/assets/project/games/pp_2.png'
import rb_1 from '$lib/assets/project/games/rb_1.png'
import rb_2 from '$lib/assets/project/games/rb_2.png'
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
	<Card
		title="Outbreak: Endless Runner"
		tags={['Unreal Engine 5', 'C++', 'Blueprint']}
		description="Endless runner game using Unreal Engine C++ and Blueprint."
		videoLink="https://drive.google.com/file/d/1sRH-x77rQw1dSZtipbTjHYsWLLp-M00q/preview"
		githubLink="https://github.com/bellavee/outbreak_ue5cpp"
	/>

	<Card
		title="Tower Attack: Shaders"
		tags={['Unreal Engine 5', 'Blueprint', 'Shaders']}
		description="Handled graphics, lighting, effects, and color adjustments through post-processing."
		videoLink="https://drive.google.com/file/d/1qOjdPGvJsl8xCMskaPqXQl-NFLOiwuJr/preview"
		githubLink="https://github.com/bellavee/outbreak_ue5cpp"
	/>

	<Card
		title="Hoyomaidre: VR Game"
		tags={['Unity', 'C#', 'VR']}
		description="VR escape room with 4 different puzzles."
		videoLink="https://drive.google.com/file/d/1dG1Qu6Uk02iAy-uu2fC-2p30eqKRxZ2A/preview"
		githubLink="https://github.com/FreezeKaz/HoyoMairde"
	/>

	<Card
		title="Dungeon Explorer"
		tags={['Unity', 'C#']}
		description="2D Top Shooter Game."
		videoLink="https://drive.google.com/file/d/1sjI4GDjENk_8sGZwPPnm6cyqcjW5qOXJ/preview"
		githubLink="https://github.com/Red-H-Star/ProjectAI"
	/>

	<Card
		title="Ricochet Robots"
		tags={['Java', 'Java Swing']}
		description="Puzzle board game with a solving system using A* path finding algorithm"
		image={{ url: rb_2, alt: 'Screenshot of Ricochet Robots game' }}
		githubLink="https://github.com/bellavee/block-puzzle"
	/>

	<Card
		title="PyPuzzle"
		tags={['Python', 'PyGame']}
		description="Block puzzle game."
		image={{ url: pp_2, alt: 'Screenshot of PyPuzzle game' }}
		githubLink="https://github.com/bellavee/block-puzzle"
	/>
</div>