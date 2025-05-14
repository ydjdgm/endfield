<script>
    export let data;
    const character = data.character;
    import CharacterHeader from "$lib/components/character/characterHeader.svelte";
    import CharacterStats from "$lib/components/character/characterStats.svelte";
    import CharacterSkills from "$lib/components/character/characterSkills.svelte";
    import CharacterChapterSelector from "$lib/components/character/characterChapterSelector.svelte";
    import CharacterTalent from "$lib/components/character/characterTalent.svelte";
</script>

<CharacterChapterSelector />
<CharacterHeader {character} />
<CharacterStats {character} />
<CharacterSkills {character} />
<CharacterTalent {character} />

<img src="/{character.header_img}" />
