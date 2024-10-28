<script>
    import Hero from "$lib/components/Hero.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import { fade } from 'svelte/transition';
    import { Clock, Code, Gamepad2, Github, Globe, Layout, Linkedin, Rocket, Sparkles } from 'lucide-svelte';
    import { getImageUrl } from "$lib/utils/utils.js";
    import LiveProjectCard from "$lib/components/LiveProjectCard.svelte";
    import AboutMe from "$lib/components/AboutMe.svelte";
    import tagColors from "$lib/json/tag_colors.json";
    import projectsData from '$lib/json/projects.json';
    
    let data = projectsData;

    let activeTab = 'web';
    let projects = data.projects;

    // Get live projects across all categories
    $: liveProjects = Object.values(projects)
        .flat()
        .filter(project => project.on_live)
        .sort((a, b) => new Date(b.last_updated) - new Date(a.last_updated));

    // Get the two newest projects across all categories
    $: newestProjects = Object.values(projects)
        .flat()
        .sort((a, b) => new Date(b.last_updated) - new Date(a.last_updated))
        .slice(0, 2);

    function setActiveTab(tab) {
        activeTab = tab;
    }

    // Color mapping for project types
    const typeColors = {
        'web': 'Kohane',    // blue for web projects
        'game': 'Akito',     // orange/red for games
        'tool': 'Nene'       // teal/cyan for tools
    };

    // Get color based on project type
    const getProjectColor = (project) => {
        if (isLive) return 'haruka';  // Always use haruka for live projects
        return typeColors[project.type] || 'haruka'; // Fallback to haruka if type not found
    };
</script>

<svelte:head>
    <title>Bella Portfolio</title>
</svelte:head>

<div class="max-w-screen-2xl mx-auto mt-10 px-4 min-h-screen">
    <!-- Hero Section with gradient background -->
    <section class="relative mb-24 pt-10 rounded-2xl overflow-hidden">
        <Hero />
    </section>

    <div class="lg:flex lg:gap-12 pb-20">
        <!-- Left Column -->
        <section class="lg:w-1/3 mb-12 lg:mb-0 space-y-6">
            <AboutMe />
        </section>

        <!-- Right Column -->
        <section class="lg:w-2/3 space-y-16">
            <!-- Live Projects Section -->
            {#if liveProjects.length > 0}
                <section>
                    <div class="flex items-center gap-3 mb-8">
                        <div class="p-2 rounded-lg bg-haruka/5 text-haruka">
                            <Rocket class="h-6 w-6" />
                        </div>
                        <div>
                            <h2 class="text-xl font-bold text-navy-100">Ready to Use</h2>
                            <p class="text-navy-300 text-sm">You can try right now</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-6">
                        {#each liveProjects as project (project.id)}
                            <div transition:fade={{ duration: 300 }}>
                                <LiveProjectCard {project} />
                            </div>
                        {/each}
                    </div>
                </section>
            {/if}

            <!-- Latest Projects Section -->
            <section>
                <div class="flex items-center gap-3 mb-8">
                    <div class="p-2 rounded-lg" style="background-color: {tagColors.Tsusaka}10; color: {tagColors.Tsusaka}">
                        <Clock class="h-6 w-6" />
                    </div>
                    <div>
                        <h2 class="text-xl font-bold text-navy-100">Latest Projects</h2>
                        <p class="text-navy-300 text-sm">Recently updated work</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {#each newestProjects as project (project.id)}
                        <div transition:fade={{ duration: 300 }}>
                            <ProjectCard {project} color={'Tsusaka'}/>
                        </div>
                    {/each}
                </div>
            </section>

            <!-- All Projects Section -->
            <section>
                <div class="flex items-center gap-3 mb-8">
                    <div class="p-2 rounded-lg"
                         style="background-color: {tagColors[typeColors[activeTab]]}10; color: {tagColors[typeColors[activeTab]]}">
                        <Layout class="h-6 w-6" />
                    </div>
                    <div>
                        <h2 class="text-xl font-bold text-navy-100">All Projects</h2>
                        <p class="text-navy-300 text-sm">Browse by category</p>
                    </div>
                </div>
                <div class="flex mb-6 bg-navy-900/50 backdrop-blur-sm rounded-lg gap-6 p-1">
                    {#each ['web', 'game', 'tool'] as tab}
                        <button
                                class="flex-1 px-4 py-2.5 rounded-lg font-medium transition-all duration-300"
                                class:bg-akito={activeTab === tab && tab === 'game'}
                                class:bg-kohane={activeTab === tab && tab === 'web'}
                                class:bg-nene={activeTab === tab && tab === 'tool'}
                                class:text-navy-900={activeTab === tab}
                                class:text-navy-300={activeTab !== tab}
                                class:hover:bg-navy-800={activeTab !== tab}
                                on:click={() => setActiveTab(tab)}
                        >
                        {tab === 'web' ? 'Web' : tab === 'game' ? 'Games' : 'Tools'}
                        </button>
                    {/each}
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {#each projects[activeTab] as project (project.id)}
                        <div transition:fade={{ duration: 300 }}>
                            <ProjectCard {project} color={typeColors[activeTab]}/>
                        </div>
                    {/each}
                </div>
            </section>
        </section>
    </div>
</div>