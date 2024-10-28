<script>
    import { Globe, Gamepad2, Code } from 'lucide-svelte';

    export let project = {
        type: 'code',
        link: '#',
    };

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

<div class="group relative bg-navy-900/50 backdrop-blur-sm rounded-xl border transition-all duration-300 overflow-hidden border-haruka/50">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-haruka/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    <a href={project.link} target="_blank">
        <!-- Content -->
        <div class="relative px-6 py-4">
            <div class="flex items-center justify-between">
                <!-- Left: Icon & Title -->
                <div class="flex items-center flex-1 min-w-0 mr-4">
                    {#if project.icon}
                        <img src={project.icon} alt={`${project.title} icon`} class="w-10 h-10 rounded-lg mr-4 flex-shrink-0" />
                    {:else}
                        <div class="w-10 h-10 rounded-lg mr-4 flex items-center justify-center bg-navy-800/50 text-haruka border border-navy-700/50 flex-shrink-0">
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
                        <h3 class="text-xl font-bold text-navy-100 truncate">{project.title}</h3>
                        <p class="text-navy-300 text-sm">{project.short_desc}</p>
                    </div>
                </div>


                <!-- Right: Actions -->
                <div class="flex items-center gap-6 flex-shrink-0">
                    <!--                <a href={project.link}-->
                    <!--                   target="_blank"-->
                    <!--                   rel="noopener noreferrer"-->
                    <!--                   class="inline-flex items-center text-sm font-medium transition-colors duration-300 gap-1 text-haruka hover:text-haruka/80 group/link">-->
                    <!--                    {getActionText(project.type)}-->
                    <!--                    <ExternalLink size={16} class="transition-transform duration-300 ease-in-out group-hover/link:translate-x-1" />-->
                    <!--                </a>-->
                </div>

                <!-- Center: Status Badge -->
                <div class="px-3 py-1 rounded-full text-sm font-medium bg-haruka/10 text-haruka border border-haruka/20 ml-4 flex-shrink-0">
                    {project.type === 'game' ? 'Playable' : 'Live'}
                </div>
            </div>
        </div>
        
    </a>

</div>