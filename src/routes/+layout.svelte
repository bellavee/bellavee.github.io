<script>
	import "../app.css";
    import Header from './pages/Header.svelte';

    import img_background from '$lib/assets/bg_xl.jpg'
    
</script>

<div class="bg-navy-900">
    <div class="bg-white max-w-6xl mx-auto">
<!--        <Header image={{ url: img_background, alt: 'Header background' }}/>-->
        <div class="md:px-5 lg:px-10">
            <!-- <Presentation/> -->
            <slot />

        </div>
    </div>
</div>
