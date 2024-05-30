<script>
	import Navigation from './components/Navigation.svelte';
	import Project from './pages/Project.svelte';
	import Presentation from './pages/Presentation.svelte';
	import Footer from './pages/Footer.svelte';
	import About from './pages/About.svelte';
	import Hobbies from './pages/Hobbies.svelte';
	import img_background from '$lib/assets/bg_xl.jpg'
</script>

<style>
  .aspect-ratio {
    position: relative;
    width: 100%; /* Adjust width as needed */
    padding-top: 30%; /* 100 * 9 / 21 */
    overflow: hidden;
	margin-bottom: 120px;
  }

  .aspect-ratio img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

<!--<Navigation/>-->

<div class="bg-navy-900">
	<div class="bg-navy-800 max-w-6xl mx-auto">

		<div class="aspect-ratio">
			<img src="{img_background}" alt="Background" />
		</div>

		<div class="px-20">
			<!-- <Presentation/> -->
			<About/>
			<Project/>
			<!-- <Hobbies/> -->
			<Footer/>
		</div>
	</div>
</div>
