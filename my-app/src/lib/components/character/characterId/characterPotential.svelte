<script lang="ts">
    export let character;
</script>

<div
    class="flex justify-center w-[51.9vw] text-white bg-neutral-800 font-bold p-3 mt-50"
>
    <p id="potential" class="text-2xl font-bold">잠재력</p>
</div>
<div class="flex flex-wrap justify-between w-[51.9vw] -mt-3">
    {#each character.potential as potential, i}
        <div
            class="w-[25.3vw] text-white bg-neutral-800 font-bold mt-10 p-3 space-y-4 border border-{character
                .element.color} shadow-sm"
        >
            <div class="flex items-center justify-center space-x-3">
                <p class="text-lg font-bold">P{i + 1}: {potential.name}</p>
            </div>
            <div class="h-[1px] w-full bg-white/10"></div>

            <div class="flex m-5">
                <p class="font-normal">{potential.description}</p>
            </div>
        </div>
    {/each}
</div>
