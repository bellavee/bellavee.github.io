<script>
	import Navigation from './components/Navigation.svelte';
	import Project from './pages/Project.svelte';
	import Presentation from './pages/Presentation.svelte';
	import Footer from './pages/Footer.svelte';
	import About from './pages/About.svelte';
	import Hobbies from './pages/Hobbies.svelte';
	import Header from './pages/Header.svelte';
</script>

<div class="bg-navy-900">
	<div class="bg-navy-800 max-w-6xl mx-auto">
		<Header/>
		<div class="px-2 md:px-20">
			<!-- <Presentation/> -->
			<About/>
			<Project/>
			<!-- <Hobbies/> -->
			<Footer/>
		</div>
	</div>
</div>
