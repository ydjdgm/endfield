<script lang="ts">
    import { Sparkle, RotateCcw } from "@lucide/svelte";

    // 부모로부터 받는 상태 변수들
    export let selectedRarity: number | null = null;
    export let selectedElement: number | null = null;
    export let selectedClass: number | null = null;
    export let selectedWeaponType: number | null = null;

    // DB로부터 받은 동적 데이터를 props로 받도록 선언
    export let rarities: Array<{ id: number }> = [];
    export let elements: Array<{ id: number; name: string; img: string }> = [];
    export let classes: Array<{ id: number; name: string; img: string }> = [];
    export let weapon_types: Array<{ id: number; name: string; img: string }> =
        [];

    // 초기화 함수
    function resetFilters() {
        selectedRarity = null;
        selectedElement = null;
        selectedClass = null;
        selectedWeaponType = null;
    }
</script>

<div class="">
    <div class="flex gap-8">
        <div class="flex gap-2 mt-10">
            {#each rarities as r}
                {#if r.id >= 4}
                    <button
                        class="btn btn-square w-21.5 h-13 p-2 bg-neutral hover:bg-neutral-focus border border-gray-700"
                        class:selected={selectedRarity === r.id}
                        class:bg-sky-500={selectedRarity === r.id}
                        class:border-sky-700={selectedRarity === r.id}
                        on:click={() =>
                            (selectedRarity =
                                selectedRarity === r.id ? null : r.id)}
                    >
                        <p class="text-xl">{r.id}</p>
                        <Sparkle class="w-6 h-6" />
                    </button>
                {/if}
            {/each}
        </div>
        <div class="flex gap-2 mt-10">
            {#each elements as elem}
                <button
                    class="btn btn-square w-17 h-13 p-2 bg-neutral hover:bg-neutral-focus border border-gray-700"
                    class:selected={selectedElement === elem.id}
                    class:bg-sky-500={selectedElement === elem.id}
                    class:border-sky-700={selectedElement === elem.id}
                    on:click={() =>
                        (selectedElement =
                            selectedElement === elem.id ? null : elem.id)}
                >
                    <img src={elem.img} alt={elem.name} class="w-6 h-6" />
                </button>
            {/each}
        </div>
        <div class="flex gap-2 mt-10">
            <button
                class="btn btn-square w-13 h-13 p-2 bg-neutral hover:bg-neutral-focus border border-gray-700"
                on:click={resetFilters}
                ><RotateCcw />
            </button>
        </div>
    </div>
    <div class="flex gap-5">
        <div class="flex gap-2 mt-5">
            {#each classes as c}
                <button
                    class="btn btn-square w-17 h-13 p-2 bg-neutral hover:bg-neutral-focus border border-gray-700"
                    class:selected={selectedClass === c.id}
                    class:bg-sky-500={selectedClass === c.id}
                    class:border-sky-700={selectedClass === c.id}
                    on:click={() =>
                        (selectedClass = selectedClass === c.id ? null : c.id)}
                >
                    <img src={c.img} alt={c.name} class="w-6 h-6" />
                </button>
            {/each}
        </div>
        <div class="flex gap-2 mt-5">
            {#each weapon_types as wt}
                <button
                    class="btn btn-square w-17 h-13 p-2 bg-neutral hover:bg-neutral-focus border border-gray-700"
                    class:selected={selectedWeaponType === wt.id}
                    class:bg-sky-500={selectedWeaponType === wt.id}
                    class:border-sky-700={selectedWeaponType === wt.id}
                    on:click={() =>
                        (selectedWeaponType =
                            selectedWeaponType === wt.id ? null : wt.id)}
                >
                    <img src={wt.img} alt={wt.name} class="w-6 h-6" />
                </button>
            {/each}
        </div>
    </div>
</div>
