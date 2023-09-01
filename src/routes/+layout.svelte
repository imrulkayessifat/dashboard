<script>
	import { onMount } from "svelte";
	import Makeup from "./Makeup.svelte";
	import Table from "./Table.svelte";
	let currentRoute = "";

	onMount(() => {
		// You can set the initial route here based on the URL or any other logic
		currentRoute = window.location.pathname;
	});
</script>

<div class="app">
	<nav>
		<div class="fixed top-2  right-11 z-[99]">
			<button class="flex h-12 w-16 cursor-pointer items-center justify-center rounded-sm bg-rose-400 text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp" on:click={() => (currentRoute = "/layout")}>Layout</button>
		</div>
		<div class="fixed top-16  right-11 z-[99]">
			<button class="flex h-12 w-16 cursor-pointer items-center justify-center rounded-sm bg-orange-400 text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp" on:click={() => (currentRoute = "/chart")}>Chart</button>
		</div>
	</nav>

	{#if currentRoute === "/layout"}
		<Makeup />
	{:else if currentRoute === "/chart"}
		<Table />
	{/if}
</div>
