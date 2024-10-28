<script>
    import { Globe, Gamepad2, Code, ArrowLeft } from 'lucide-svelte';
    import { getImageUrl } from "$lib/utils/utils.js";
    import tagColors from '$lib/json/tag_colors.json';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import projectsData from '$lib/json/projects.json';
    import { base } from "$app/paths";
    
    // Get project ID from URL parameter
    $: projectId = $page.params.id;

    // Find the project and other projects
    $: project = {
        ...Object.values(projectsData.projects)
          .flat()
          .find(p => p.id === projectId),
        collectionId: 'projects'
    };

    $: otherProjects = Object.values(projectsData.projects)
      .flat()
      .filter(p => p.id !== projectId)
      .map(p => ({
          ...p,
          collectionId: 'projects'
      }));

    $: icon = project.icon ? getImageUrl(project.icon) : null;
    $: projectColor = tagColors[project.color] || tagColors['default'];

    let currentSlide = 0;
    let slideInterval;

    function nextSlide() {
        currentSlide = (currentSlide + 1) % project.preview.length;
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + project.preview.length) % project.preview.length;
    }

    onMount(() => {
        if (project.preview && project.preview.length > 0) {
            slideInterval = setInterval(nextSlide, 5000);
            return () => clearInterval(slideInterval);
        }
    });

    function goBack() {
        goto('/');
    }

    function getEmbedUrl(url) {
        if (!url) return null;
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            const videoId = url.split('v=')[1] || url.split('/').pop();
            return `https://www.youtube.com/embed/${videoId}`;
        } else if (url.includes('vimeo.com')) {
            const videoId = url.split('/').pop();
            return `https://player.vimeo.com/video/${videoId}`;
        }
        return url;
    }
</script>

<svelte:head>
    <title>{project.title}</title>
</svelte:head>

<div class="max-w-screen-2xl mx-auto mt-6 px-4 min-h-screen">
    <div class="flex flex-col lg:flex-row gap-6">
        <!-- Main Project Details -->
        <div class="lg:w-3/4">
            <button on:click={goBack} class="flex items-center text-lg font-bold text-navy-100 mb-4 border rounded-lg px-4 py-1.5" style="border-color: {projectColor}50">
                <ArrowLeft class="mr-2" size={20} />
                <span>Back</span>
            </button>

            <div class="bg-navy-900 rounded-lg p-4 md:p-8 border" style="border-color: {projectColor}50">
                <!-- Project Title and Icon -->
                <div class="flex items-center mb-8">
                    {#if icon}
                        <img src={icon} alt={`${project.title} icon`} class="w-16 h-16 mr-6" />
                    {:else}
                        <div class="w-16 h-16 mr-6 text-navy-100" style="color: {projectColor}">
                            {#if project.type === 'web'}
                                <Globe size={64} />
                            {:else if project.type === 'game'}
                                <Gamepad2 size={64} />
                            {:else if project.type === 'tool'}
                                <Code size={64} />
                            {/if}
                        </div>
                    {/if}
                    <div>
                        <h1 class="text-4xl font-bold text-navy-100 mb-2">{project.title}</h1>
                        {#if project.tags}
                            <div class="flex flex-wrap gap-2">
                                {#each project.tags.split(',') as tag}
                                    <span class="px-2 py-1 bg-navy-800 text-navy-200 rounded-full text-xs">{tag.trim()}</span>
                                {/each}
                            </div>
                        {/if}
                    </div>
                </div>

                <!-- Project Information -->
                <div class="mb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="md:col-span-2">
                        <h2 class="text-xl font-semibold text-navy-200 mb-3">About this project</h2>
                        <div class="text-navy-300 description-text">{project.description}</div>
                    </div>
                    <div class="space-y-6">
                        <div>
                            <h2 class="text-lg font-semibold text-navy-200 mb-2">Finished at</h2>
                            <p class="text-navy-400">{new Date(project.finished).toLocaleDateString()}</p>
                        </div>
                        <div>
                            <h2 class="text-lg font-semibold text-navy-200 mb-2">Last Updated</h2>
                            <p class="text-navy-400">{new Date(project.last_updated).toLocaleDateString()}</p>
                        </div>
                        {#if project.link}
                            <div>
                                <h2 class="text-lg font-semibold text-navy-200 mb-2">Project Link</h2>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" class="w-full inline-block px-4 py-2 bg-navy-800 hover:bg-navy-600 transition-colors duration-300 rounded-lg truncate" style="color: {projectColor}">{project.link}</a>
                            </div>
                        {/if}
                    </div>
                </div>

                <!-- Full-width image carousel -->
                {#if project.preview && project.preview.length > 0}
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-navy-200 mb-4">Project Gallery</h2>
                        <div class="relative">
                            {#each project.preview as previewImage, index}
                                <img
                                        src={getImageUrl(previewImage)}
                                        alt="Project preview"
                                        class="w-full h-auto rounded-lg transition-opacity duration-500 ease-in-out"
                                        style="opacity: {index === currentSlide ? 1 : 0}; position: {index === currentSlide ? 'relative' : 'absolute'}; top: 0; left: 0;"
                                />
                            {/each}
                            <button class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r" on:click={prevSlide}>←</button>
                            <button class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l" on:click={nextSlide}>→</button>
                        </div>
                    </div>
                {/if}

                <!-- Video Embed -->
                {#if project.video}
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-navy-200 mb-4">Project Demo</h2>
                        <div class="aspect-w-16 aspect-h-9">
                            <iframe
                                    src={getEmbedUrl(project.video)}
                                    title="Project Video"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    class="w-full h-full rounded-lg"
                            ></iframe>
                        </div>
                    </div>
                {/if}
            </div>
        </div>

        <!-- Other Projects Section -->
        <div class="lg:w-1/4">
            <div class="px-0 md:px-6 sticky top-4">
                <h2 class="text-2xl font-bold text-navy-100 mb-6">Other Projects</h2>
                <div class="space-y-4">
                    {#each otherProjects as otherProject}
                        <a href="/project/{otherProject.id}" class="block p-4 rounded-lg transition-colors duration-200 border" style="border-color: {tagColors[otherProject.color]}50">
                            <div class="flex items-center mb-2">
                                {#if otherProject.icon}
                                    <img src={getImageUrl(otherProject.icon)} alt={`${otherProject.title} icon`} class="w-6 h-6 mr-2" />
                                {:else}
                                    <div class="w-6 h-6 mr-2 text-navy-100" style="color: {tagColors[otherProject.color] || tagColors['default']}">
                                        {#if otherProject.type === 'web'}
                                            <Globe size={24} />
                                        {:else if otherProject.type === 'game'}
                                            <Gamepad2 size={24} />
                                        {:else if otherProject.type === 'tool'}
                                            <Code size={24} />
                                        {/if}
                                    </div>
                                {/if}
                                <h3 class="text-lg font-semibold text-navy-100">{otherProject.title}</h3>
                            </div>
                            <p class="text-navy-300 text-sm">{otherProject.short_desc}</p>
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .description-text {
        white-space: pre-line;
    }
    /* Add this if you haven't already included it in your global styles */
    .aspect-w-16 {
        position: relative;
        padding-bottom: 56.25%;
    }
    .aspect-w-16 > * {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
</style>