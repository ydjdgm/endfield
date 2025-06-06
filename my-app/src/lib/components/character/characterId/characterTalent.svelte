<script lang="ts">
    export let character;
</script>

<div
    class="flex justify-center w-[51.9vw] text-white bg-neutral-800 font-bold p-3 mt-50"
>
    <p id="talent" class="text-2xl font-bold">재능</p>
</div>
<div class="flex flex-wrap justify-between w-[51.9vw] -mt-3">
    {#each character.talent as talent}
        <div
            class="w-[25.3vw] text-white bg-neutral-800 font-bold mt-10 p-3 space-y-4 border border-{character
                .element.color} shadow-sm"
        >
            <p class="text-lg font-bold text-center">
                {#if talent.type === "combat"}전투 재능:&nbsp;
                {:else if talent.type === "base"}일반 재능:&nbsp;
                {/if}{talent.name}
            </p>

            <div class="h-[1px] w-full bg-white/10"></div>

            <div class="m-5 font-normal">
                <p>{talent.description}</p>
            </div>
        </div>
    {/each}
</div>
