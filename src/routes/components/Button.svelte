<script>
	export let label = 'Button';
	export let active = false;
	export let onClick = () => {};
	export let iconSrc = ''; // Icon source URL
</script>

<style>
    .icon {
				width: 24px;
				height: auto;
        transition: filter 0.3s ease-in-out;
    }

    .icon-inactive {
        filter: grayscale(100%); /* Gray filter for inactive state */
    }
</style>

<button
	class="flex items-center transition duration-300 ease-in-out text-white font-normal py-4 px-6 text-xl
         {active ? 'bg-navy-700' : 'bg-navy-900'} hover:bg-navy-700" on:click={onClick}>
	<img src={iconSrc} alt="btn-icon" class="mr-3 icon {active ? '' : 'icon-inactive'}" />
	{label}
</button>