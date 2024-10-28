<script>
    import { Globe, Gamepad2, Code, ExternalLink, Image, Video } from 'lucide-svelte';
    import tagColors from '$lib/json/tag_colors.json';

    export let project = {
        type: 'code',
    };
    
    export let color = "";

    export let isLive = false;

    const getActionText = (type) => {
        switch(type) {
            case 'web':
                return 'Visit Site';
            case 'game':
                return 'Play Now';
            case 'tool':
                return 'Use Tool';
            default:
                return 'Visit Project';
        }
    };
</script>

<div class="group relative bg-navy-900/50 backdrop-blur-sm rounded-xl border border-navy-700/30 transition-all duration-300 overflow-hidden h-full hover:border-{tagColors[color]}/50"
     style="border-color: {tagColors[color]}50; --shadow-color={tagColors[color]}05">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-tsusaka/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
         style="--tw-gradient-to: {tagColors[color]}08"></div>
    
    <!-- Content -->
    <a href="/" class="relative p-6 flex flex-col h-full">
        <!-- Header -->
        <div class="flex items-start justify-between mb-4">
            <div class="flex items-center">
                {#if project.icon}
                    <img src={project.icon} alt={`${project.title} icon`} class="w-10 h-10 rounded-lg mr-4" />
                {:else}
                    <div class="w-10 h-10 rounded-lg mr-4 flex items-center justify-center bg-navy-800/50 border border-navy-700/50"
                         style="color: {tagColors[color]}">
                        {#if project.type === 'web'}
                            <Globe size={24} />
                        {:else if project.type === 'game'}
                            <Gamepad2 size={24} />
                        {:else if project.type === 'tool'}
                            <Code size={24} />
                        {/if}
                    </div>
                {/if}
                <div>
                    <h3 class="text-xl font-bold text-navy-100">{project.title}</h3>
                    {#if project.tags}
                        <div class="flex flex-wrap gap-1.5 mt-1">
                            {#each project.tags.split(',').slice(0, 3) as tag}
                                <span class="px-2.5 py-0.5 bg-navy-800 text-navy-200 rounded-full text-xs font-medium">{tag.trim()}</span>
                            {/each}
                        </div>
                    {/if}
                </div>
            </div>
            <!-- Status/Media Indicators -->
            <div class="flex gap-2">
                {#if isLive}
                    <div class="px-3 py-1 rounded-full text-sm font-medium border bg-opacity-10"
                         style="color: {tagColors[color]}; border-color: {tagColors[color]}20; background-color: {tagColors[color]}10">
                        {project.type === 'game' ? 'Playable' : 'Live'}
                    </div>
                {:else if project.preview || project.video}
                    {#if project.preview && project.preview.length > 0}
                        <div style="color: {tagColors[color]}"
                             title="Project has images">
                            <Image size={14} />
                        </div>
                    {/if}
                    {#if project.video}
                        <div style="color: {tagColors[color]}"
                             title="Project has video">
                            <Video size={14} />
                        </div>
                    {/if}
                {/if}
            </div>
        </div>

        <!-- Description -->
        <p class="text-navy-300 mb-6 flex-grow line-clamp-2">{project.short_desc}</p>

        <!-- Action Area -->
        <div class="flex items-center justify-between mt-auto">
            {#if isLive}
                <a href={`/project/${project.id}`}
                   class="text-sm font-medium transition-colors duration-300"
                   style="color: {tagColors[color]}">
                    View Details
                </a>
                <a href={project.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   class="inline-flex items-center text-sm font-medium transition-colors duration-300 gap-1 group/link"
                   style="color: {tagColors[color]}">
                    {getActionText(project.type)}
                    <ExternalLink size={16} class="transition-transform duration-300 ease-in-out group-hover/link:translate-x-1" />
                </a>
            {:else}
                <span class="inline-flex items-center text-sm font-medium transition-colors duration-300 gap-1 ml-auto"
                      style="color: {tagColors[color]}">
                    Explore Project
                    <svg class="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                         viewBox="0 0 24 24"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </span>
            {/if}
        </div>
    </a>
</div>

<style>
    .group:hover {
        box-shadow: 0 8px 30px var(--shadow-color);
    }
</style>