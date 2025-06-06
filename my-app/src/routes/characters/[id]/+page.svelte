<script>
    export let data;
    const character = data.character;
    import CharacterHeader from "$lib/components/character/characterId/characterHeader.svelte";
    import CharacterStats from "$lib/components/character/characterId/characterStats.svelte";
    import CharacterSkills from "$lib/components/character/characterId/characterSkills.svelte";
    import CharacterChapterSelector from "$lib/components/character/characterId/characterChapterSelector.svelte";
    import CharacterTalent from "$lib/components/character/characterId/characterTalent.svelte";
    import CharacterPotential from "$lib/components/character/characterId/characterPotential.svelte";
</script>

<CharacterChapterSelector />
<CharacterHeader {character} />
<div
    class="flex justify-center w-[51.9vw] text-white bg-neutral-800 font-bold p-3 mt-50"
>
    <p id="zf" class="text-2xl font-bold">캐릭터 요약</p>
</div>
<div class="flex flex-wrap justify-between w-[51.9vw] -mt-3">
    <div
        class="w-[51.9vw] text-white bg-neutral-800 font-bold mt-10 p-3 space-y-4 border border-{character
            .element.color} shadow-sm"
    >
        <div class="flex items-center justify-center space-x-3">
            <p class="text-lg font-bold">
                {character.rarity.id}성 /
                {character.element.name} /
                {character.weapon_type.name} /
                {character.class.name} 캐릭터
            </p>
        </div>
        <div class="h-[1px] w-full bg-white/10"></div>
        <div class="flex m-5">
            <p class="font-normal">{character.zf}</p>
        </div>
    </div>
</div>
<CharacterStats {character} />
<CharacterSkills {character} />
<CharacterTalent {character} />
<CharacterPotential {character} />
<div
    class="flex justify-center w-[51.9vw] text-white bg-neutral-800 font-bold p-3 mt-50"
>
    <p id="weapon" class="text-2xl font-bold">무기 효율</p>
</div>
<div
    class="flex justify-center w-[51.9vw] text-white bg-neutral-800 font-bold p-3 mt-50"
>
    <p id="gear" class="text-2xl font-bold">기어</p>
</div>
<div
    class="flex justify-center w-[51.9vw] text-white bg-neutral-800 font-bold p-3 mt-50"
>
    <p id="party" class="text-2xl font-bold">추천 조합</p>
</div>

<img src="/{character.header_img}" />
