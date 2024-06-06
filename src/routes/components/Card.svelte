<script>
    import Tag from './Tag.svelte';
    import github_mark from '$lib/assets/icon/github-mark-white.svg'
    export let title = '';
    export let description = '';
    export let tags = []; // Array of programming languages
    export let videoLink = ''; // Google Drive video link
    export let githubLink = ''; // GitHub link URL
	export let image = { url: '', alt: '' };
</script>

<style>
    .video-container {
        position: relative;
        width: 100%; /* Adjust as needed */
        height: 0;
        padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
        overflow: hidden;
		/* margin: 20px 0px; */
    }

    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .card-container {
        position: relative;
        transition: all 0.3s ease-in-out;
        padding-bottom: 0 !important;
    }

    .github-link {
        position: absolute;
        top: 2.5rem; 
        right: 2.5rem; 
        width: 30px; 
        height: 30px;
    }

    @media (max-width: 768px) {
      .github-link {
        top: 1.25rem;
        right: 1.25rem;
      }
    }

    .github-icon {
        width: 100%;
        height: 100%;
        transition: filter 0.3s ease-in-out;
    }

    .github-icon:hover {
        filter: opacity(40%); /* Darken the image on hover */
    }

	.image-container {
        position: relative;
        height: 100%; /* Adjust based on your design requirements */
        width: 100%;
        overflow: hidden;
        padding-top: 4px;
    }

</style>

<div class="w-full">
    <div class="card-container bg-navy-700 mx-auto p-5 lg:p-10 hover:bg-navy-600 transition duration-300 ease-in-out">

        {#if githubLink !== ''}
            <a href={githubLink} target="_blank" class="github-link">
                <img class="github-icon" src={github_mark} alt="github"/>
            </a>
        {/if}

        {#if title !== ''}
            <h2 class="text-white font-bold text-2xl mb-2 mr-12">{title}</h2>
        {/if}

        {#if description !== ''}
            <p class="text-white font-extralight">
                {description}
            </p>
        {/if}

        {#if tags.length > 0}
            <div class="flex flex-wrap gap-2 my-4">
                {#each tags as tag}
                    <Tag language={tag} />
                {/each}
            </div>
        {/if}

        {#if videoLink !== ''}
            <div class="video-container relative h-32 md:h-56 2xl:h-64">
                <iframe src={videoLink} allow="autoplay" frameborder="0" allowfullscreen title="Demo"></iframe>
            </div>
        {:else if image.url !== ''}
            <div class="image-container relative h-32 md:h-56 2xl:h-64">
                <img src={image.url} alt={image.alt} class="object-cover w-full h-full"/>
            </div>
        {/if}

    </div>
</div>
