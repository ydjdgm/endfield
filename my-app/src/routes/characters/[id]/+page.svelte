<script>
    export let data;
    const character = data.character;
    import CharacterHeader from "$lib/components/character/characterHeader.svelte";
    import CharacterStats from "$lib/components/character/characterStats.svelte";
    import CharacterSkills from "$lib/components/character/characterSkills.svelte";
    import CharacterChapterSelector from "$lib/components/character/characterChapterSelector.svelte";
    import CharacterTalent from "$lib/components/character/characterTalent.svelte";
    import CharacterPotential from "$lib/components/character/characterPotential.svelte";
</script>

<CharacterChapterSelector />
<CharacterHeader {character} />
<div
    class="flex justify-center w-[51.9vw] text-white bg-neutral-800 font-bold p-3 mt-50"
>
    <p id="zf" class="text-2xl font-bold">캐릭터 요약</p>
</div>
<div class="flex flex-wrap justify-between w-[51.9vw] -mt-3"></div>
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
