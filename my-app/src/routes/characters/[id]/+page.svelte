<script>
    export let data;
    const character = data.character;
    import CharacterHeader from "$lib/components/characterHeader.svelte";
    import CharacterStats from "$lib/components/characterStats.svelte";
</script>

<CharacterHeader {character} />
<CharacterStats {character} />
<div
    class="flex justify-center w-[51.9vw] text-white bg-neutral-800 font-bold p-3 mt-50"
>
    <p id="skill" class="text-2xl font-bold">스킬</p>
</div>
<div class="flex flex-wrap justify-between w-[51.9vw] -mt-3">
    {#each character.skill as skill}
        <div
            class="w-[25.3vw] text-white bg-neutral-800 font-bold mt-10 p-3 space-y-4 border border-{character
                .element.color} shadow-sm"
        >
            <div class="flex items-center justify-center space-x-3">
                <p class="text-lg font-bold">
                    {#if skill.type === "basic"}기본 공격:&nbsp;
                    {:else if skill.type === "battle"}전투 스킬:&nbsp;
                    {:else if skill.type === "combo"}콤보 스킬:&nbsp;
                    {:else if skill.type === "ultimate"}궁극기:&nbsp;
                    {/if}{skill.name}
                </p>
            </div>
            <div class="h-[1px] w-full bg-white/10"></div>
            {#each skill.description as description}
                <div class="flex m-5">
                    <p>{description.description}</p>
                </div>
            {/each}
            <div class="h-[1px] w-full bg-white/10"></div>
            {#each skill.multiplier as mul}
                <div
                    class="bg-white/5 rounded px-3 py-2 my-1 flex justify-between"
                >
                    <p>{mul.name}</p>
                    <p>{mul.mul}</p>
                </div>
            {/each}
        </div>
    {/each}
</div>

<img src="/{character.header_img}" />
