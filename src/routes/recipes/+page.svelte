<script>
	export let data;
	const { recipes } = data;
</script>

<h1 class="text-[50px]">FOOD RECIPES</h1>

{#each recipes as item}
	<p>{item.title}</p>
	<img src={item.image} alt={item.title} />
{/each}
