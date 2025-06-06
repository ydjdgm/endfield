<script lang="ts">
    import { RotateCcw, Star } from "@lucide/svelte";

    // 부모 컴포넌트(+page.svelte)와 바인딩될 상태 변수들
    export let selectedWeaponType: number | null = null;
    export let selectedRarity: number | null = null;

    // +page.server.js 에서 불러온 필터링 데이터
    export let weapon_types: Array<{ id: number; name: string; img: string }> =
        [];
    export let rarities: Array<{ id: number }> = [];

    // 필터 초기화 함수
    function resetFilters() {
        selectedWeaponType = null;
        selectedRarity = null;
    }
</script>

<div class="flex flex-wrap gap-4 items-center my-8">
    <div class="flex gap-2">
        {#each rarities as r}
            <button
                class="btn"
                class:btn-active={selectedRarity === r.id}
                on:click={() =>
                    (selectedRarity = selectedRarity === r.id ? null : r.id)}
            >
                {r.id}
                <Star class="w-4 h-4" />
            </button>
        {/each}
    </div>

    <div class="flex gap-2">
        {#each weapon_types as wt}
            <button
                class="btn btn-square"
                class:btn-active={selectedWeaponType === wt.id}
                on:click={() =>
                    (selectedWeaponType =
                        selectedWeaponType === wt.id ? null : wt.id)}
            >
                <img src={wt.img} alt={wt.name} class="w-6 h-6" />
            </button>
        {/each}
    </div>

    <div>
        <button
            class="btn btn-square"
            on:click={resetFilters}
            aria-label="필터 초기화"
        >
            <RotateCcw />
        </button>
    </div>
</div>
