<script>
    import '../app.css';
    import { navigating } from '$app/stores';
    import { fly } from 'svelte/transition';
    import Footer from "../lib/components/Footer.svelte";
</script>

<div class="flex flex-col min-h-screen bg-navy-900">
    {#key $navigating}
        <main class="flex-grow" in:fly={{ y: 50, duration: 400, delay: 300 }}>
            <slot />
        </main>
    {/key}
    <Footer />
</div>
