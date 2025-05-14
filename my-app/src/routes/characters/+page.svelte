<script>
    export let data;
    import CharactersCard from "$lib/components/charactersCard.svelte";
</script>

<h1 class="font-bold text-4xl">캐릭터</h1>

<CharactersCard {data} />
