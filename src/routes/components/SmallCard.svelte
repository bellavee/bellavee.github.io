<script>
	export let fileData;
	
</script>

<div class="w-full">
	<div class="grid p-5 relative bg-white dark:bg-navy-700 mx-auto border-page-500 border dark:border-0">

		<a href={fileData.link} class="font-bold text-xl lg:text-xl hover:underline">{fileData.title}</a>
		<div class="whitespace-pre-wrap">
			<span class="text-sm">{fileData.description}</span>
		</div>

	</div>
</div>