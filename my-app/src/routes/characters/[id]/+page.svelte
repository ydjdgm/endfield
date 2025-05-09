<script>
    export let data;
    const character = data.character;
    import CharacterHeader from "$lib/components/characterHeader.svelte";
    import CharacterStats from "$lib/components/characterStats.svelte";
</script>

<CharacterHeader {character} />
<CharacterStats {character} />
<img src="/{character.header_img}" />
