<script>
    import Tag from './Tag.svelte';

    export let fileData;
    
    export let selectedTags;
    $: selectedTags = fileData.tags.split(', ');


</script>

<div class="w-full">
    <div class="grid p-5 relative bg-white dark:bg-navy-700 mx-auto border-page-500 border dark:border-0">

        <a href={fileData.link} class="font-bold text-xl hover:underline">{fileData.title}</a>
        <div class="whitespace-pre-wrap">
            <span class="text-sm lg:text-base">{fileData.description}</span>
        </div>

        {#if fileData.tags !== ''}
            <div class="flex flex-wrap mt-1">
                {#each selectedTags as tag, i}
                    <Tag
                      name={tag}
                    />
                    {#if i < selectedTags.length - 1}
                        <span class="px-3">/</span>
                    {/if}
                {/each}
            </div>
        {/if}
        

        {#if fileData.video !== ''}
            <div class="relative h-32 md:h-56 2xl:h-64 overflow-hidden mt-2"
                style="padding-bottom: 56.25%; /* 16:9 Aspect Ratio */">
                <iframe class="absolute top-0 left-0 w-full h-full" 
                  src={fileData.video} allow="autoplay" frameborder="0" allowfullscreen title="Demo"></iframe>
            </div>
        {:else if fileData.image.url !== ''}
            <div class="relative w-full h-full overflow-hidden mt-2">
                <img alt={fileData.image.alt} class="w-full h-full" src={fileData.image.url} />
            </div>
        {/if}

    </div>
</div>