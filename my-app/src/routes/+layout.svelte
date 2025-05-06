<script lang="ts">
	import "../app.css";

	let { children } = $props();
</script>

<div class="navbar bg-base-100 shadow-sm">
	<a class="btn btn-ghost text-xl">daisyUI</a>
</div>

{@render children()}