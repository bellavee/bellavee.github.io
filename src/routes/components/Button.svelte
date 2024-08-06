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
		
</style>

<button
	class="text-sm lg:text-base flex items-center transition  duration-300 ease-in-out uppercase font-normal tracking-widest py-1 px-4
         {active ? 'bg-navy-900 text-white' : 'bg-white text-navy-900 underline'} hover:bg-navy-900 hover:text-white" on:click={onClick}>
<!--	<img src={iconSrc} alt="btn-icon" class="mr-3 icon {active ? '' : 'grayscale'}" />-->
	{label}
</button>