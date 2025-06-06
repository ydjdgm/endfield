<script lang="ts">
    export let data;

    // 1. 컴포넌트 import 경로와 이름을 WeaponList로 수정합니다.
    import WeaponFilter from "$lib/components/weapon/weaponFilter.svelte";
    import WeaponList from "$lib/components/weapon/weaponList.svelte";

    // 필터링 상태를 관리할 변수들을 선언합니다.
    let selectedWeaponType: number | null = null;
    let selectedRarity: number | null = null;

    // 서버에서 받은 전체 무기 목록을 변수에 할당합니다.
    $: allWeapons = data.weapons || [];
    console.log("페이지에 도착한 전체 데이터:", data);

    // 필터 상태가 바뀔 때마다 자동으로 목록을 필터링하는 반응형 로직입니다.
    $: filteredWeapons = allWeapons.filter((w) => {
        const rarityMatch =
            selectedRarity === null || w.rarity[0]?.id === selectedRarity;
        const weaponTypeMatch =
            selectedWeaponType === null ||
            w.weapon_type[0]?.id === selectedWeaponType;
        return rarityMatch && weaponTypeMatch;
    });
    $: console.log("필터링된 무기 목록:", filteredWeapons);
</script>

<div class="container mx-auto px-4 py-8">
    <h1 class="font-bold text-4xl mb-4">무기</h1>
    <p class="text-gray-400 mb-8">무기에 대한 정보를 확인하세요.</p>

    <WeaponFilter
        bind:selectedWeaponType
        bind:selectedRarity
        weapon_types={data.weapon_types}
        rarities={data.rarities}
    />

    <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 mt-8">
        {#each filteredWeapons as weapon (weapon.id)}
            <WeaponList {weapon} />
        {/each}
    </div>
</div>
