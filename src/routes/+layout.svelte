<script>
	import { onMount } from "svelte";
	import Makeup from "./Makeup.svelte";
	import Table from "./Table.svelte";
	import Map from "./Map.svelte";
	import Lottie from "./Lottie.svelte";

	let currentRoute = "";
	onMount(async () => {
		currentRoute = window.location.pathname;
	});
</script>

<div class="app">

	<div>
		<div class="group fixed top-2 right-11 z-[99]">
			<button
				class="transition duration-300 ease-in-out transform hover:translate-x-1.5 flex h-12 w-16 cursor-pointer items-center justify-center rounded-sm bg-rose-400 text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
				on:click={() => (currentRoute = "/layout")}>Layout</button
			>
		</div>
		<div class="group fixed top-16 right-11 z-[99]">
			<button
				class="transition duration-300 ease-in-out transform hover:-translate-x-1.5 flex h-12 w-16 cursor-pointer items-center justify-center rounded-sm bg-orange-400 text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
				on:click={() => (currentRoute = "/chart")}>Chart</button
			>
		</div>
		<div class="group fixed bottom-10 right-11 z-[99]">
			<button
				class="transition duration-300 ease-in-out transform hover:translate-x-1.5 flex h-12 w-16 cursor-pointer items-center justify-center rounded-sm bg-teal-400 text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
				on:click={() => (currentRoute = "/map")}>Map</button
			>
		</div>
	</div>

	{#if currentRoute === "/layout"}
		<Makeup />
	{:else if currentRoute === "/chart"}
		<Table />
	{:else if currentRoute === "/map"}
		<Map />
	{:else}
		<Lottie />
	{/if}
</div>
