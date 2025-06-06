<script lang="ts">
    export let data;

    import CharacterFilter from "$lib/components/character/characterFilter.svelte";
    import CharacterList from "$lib/components/character/characterList.svelte";

    let selectedRarity: number | null = null;
    let selectedElement: number | null = null;
    let selectedClass: number | null = null;
    let selectedWeaponType: number | null = null;

    $: allCharacters = [...(data.characters || [])].sort((a, b) => b.id - a.id);

    $: filteredCharacters = allCharacters.filter(
        (c) =>
            (selectedRarity === null || c.rarity.id === selectedRarity) &&
            (selectedElement === null || c.element.id === selectedElement) &&
            (selectedClass === null || c.class.id === selectedClass) &&
            (selectedWeaponType === null ||
                c.weapon_type.id === selectedWeaponType),
    );
</script>

<h1 class="font-bold text-4xl">캐릭터</h1>

<CharacterFilter
    bind:selectedRarity
    bind:selectedElement
    bind:selectedClass
    bind:selectedWeaponType
    rarities={data.rarities}
    elements={data.elements}
    classes={data.classes}
    weapon_types={data.weapon_types}
/>

<CharacterList characters={filteredCharacters} />
