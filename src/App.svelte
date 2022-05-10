<script lang="ts">
import Sidebar from "./components/Sidebar.svelte";
import CommandLine from "./components/CommandLine.svelte";
import Menu from "./components/Menu.svelte";
import Story from "./components/Story.svelte";
import Tailwind from "./components/Tailwind.svelte";
import { activeMenu } from "./stores";


</script>

<Tailwind />

<main class="flex full h-full p-3">
	<section class="grow md:pr-3 w-full md:w-3/5 mx-auto flex flex-col">
		<Story />
		<nav class="md:flex">
			<Menu />
			<CommandLine />
		</nav>
		
	</section>
	{#if $activeMenu }
		<div class="overlay"></div>
	{/if}
	<section class="flex flex-col md:w-2-5">
		<Sidebar />
	</section>
	
</main>

<style>
	.overlay {
		@apply absolute top-0 left-0 w-full h-full bg-black opacity-50;
	}
</style>