<script>
	export let title = '';
	export let description = '';
	export let iconSrc = ''; // Icon source URL
	export let link = ''; // Hyperlink URL
</script>

<style>
    a.no-underline {
        text-decoration: none; /* Removes underline from links */
        color: inherit; /* Keeps the text color consistent */
    }
</style>

<div class="w-full">
	<a href={link} target="_blank" class="no-underline"> <!-- Add the hyperlink here -->
		<div class="bg-navy-800 mx-auto p-10 hover:bg-navy-700 transition duration-300 ease-in-out">
			<div class="flex items-center mb-2">
				{#if iconSrc !== ''}
					<img class="w-16 h-16 mr-5 rounded-xl" src={iconSrc} alt="title icon"/>
				{/if}

				<div>
					{#if title !== ''}
						<h2 class="text-white font-bold text-2xl">{title}</h2>
					{/if}
					{#if description !== ''}
						<h2 class="text-white font-thin text-xl">{description}</h2>
					{/if}
				</div>

			</div>
		</div>
	</a>
</div>

