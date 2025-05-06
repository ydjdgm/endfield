<script lang="ts">
	import "../app.css";
	import Background from "$lib/components/background.svelte";
	import Navbar from "$lib/components/navbar.svelte";

	let { children } = $props();
</script>

<Navbar />
<Background>
	<div class="relative z-10 m-10 flex flex-col items-center">
		{@render children()}
	</div>
</Background>
