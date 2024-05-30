<script>
	import Navigation from './components/Navigation.svelte';
	import Project from './pages/Project.svelte';
	import Presentation from './pages/Presentation.svelte';
	import Footer from './pages/Footer.svelte';
	import About from './pages/About.svelte';
	import Hobbies from './pages/Hobbies.svelte';
	import Header from './pages/Header.svelte';
    import img_background from '$lib/assets/bg_xl.jpg'
</script>

<!--<Navigation/>-->

<div class="bg-navy-900">
	<div class="bg-navy-800 max-w-6xl mx-auto">
		<Header image={{ url: img_background, alt: 'Header image' }}/>

		<div class="px-20">
			<!-- <Presentation/> -->
			<About/>
			<Project/>
			<!-- <Hobbies/> -->
			<Footer/>
		</div>
	</div>
</div>
