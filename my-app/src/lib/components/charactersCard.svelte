<script lang="ts">
    import { Sparkle, RotateCcw } from "@lucide/svelte";
    export let data;
    const characters = [...data.character].sort((a, b) => b.id - a.id);

    let selectedElement: number | null = null;
    let selectedRarity: number | null = null;
    let selectedClass: number | null = null;
    let selectedWeaponType: number | null = null;

    const elements = [
        { id: 0, name: "물리", icon: "element/physical.webp" },
        { id: 1, name: "얼음", icon: "element/cryo.webp" },
        { id: 2, name: "전기", icon: "element/electric.webp" },
        { id: 3, name: "불", icon: "element/heat.webp" },
        { id: 4, name: "자연연", icon: "element/nature.webp" },
    ];

    const rarity = [
        { id: 4, name: "4" },
        { id: 5, name: "5" },
        { id: 6, name: "6" },
    ];

    const classes = [
        { id: 0, name: "캐스터", icon: "class/caster.webp" },
        { id: 1, name: "디펜더", icon: "class/defender.webp" },
        { id: 2, name: "가드", icon: "class/guard.webp" },
        { id: 3, name: "스페셜리스트", icon: "class/specialist.webp" },
        { id: 4, name: "서포터", icon: "class/support.webp" },
    ];

    const weapon_types = [
        { id: 0, name: "대검", icon: "weapon_type/greatsword.webp" },
        { id: 1, name: "총", icon: "weapon_type/guns.webp" },
        { id: 2, name: "orbiters", icon: "weapon_type/orbiters.webp" },
        { id: 3, name: "polearm", icon: "weapon_type/polearm.webp" },
        { id: 4, name: "검", icon: "weapon_type/sword.webp" },
    ];

    $: filteredCharacters = characters.filter(
        (c) =>
            (selectedElement === null || c.element.id === selectedElement) &&
            (selectedRarity === null || c.rarity.id === selectedRarity) &&
            (selectedClass === null || c.class.id === selectedClass) &&
            (selectedWeaponType === null ||
                c.weapon_type.id === selectedWeaponType),
    );
</script>

<div class="">
    <div class="flex gap-8">
        <div class="flex gap-2 mt-10">
            {#each rarity as r}
                <button
                    class="btn btn-square w-21.5 h-13 p-2 bg-neutral hover:bg-neutral-focus border border-gray-700"
                    class:selected={selectedRarity === r.id}
                    class:bg-sky-500={selectedRarity === r.id}
                    class:border-sky-700={selectedRarity === r.id}
                    on:click={() =>
                        (selectedRarity =
                            selectedRarity === r.id ? null : r.id)}
                >
                    <p class="text-xl">{r.id}</p><Sparkle class="w-6 h-6" />
                </button>
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
                    <img src={elem.icon} alt={elem.name} class="w-6 h-6" />
                </button>
            {/each}
        </div>
        <div class="flex gap-2 mt-10">
            <button
                class="btn btn-square w-13 h-13 p-2 bg-neutral hover:bg-neutral-focus border border-gray-700"
                on:click={() => (
                    (selectedRarity = null),
                    (selectedElement = null),
                    (selectedClass = null),
                    (selectedWeaponType = null)
                )}
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
                    <img src={c.icon} alt={c.name} class="w-6 h-6" />
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
                    <img src={wt.icon} alt={wt.name} class="w-6 h-6" />
                </button>
            {/each}
        </div>
    </div>
</div>

<ul class="flex flex-wrap gap-3 mt-20 justify-center">
    {#each filteredCharacters as c}
        <li
            class="group relative w-38 h-53 bg-white/20 backdrop-blur-sm border border-black/30 flex flex-col justify-end transition-border duration-200 hover:border-white/60 overflow-hidden"
        >
            <!-- 동적 라우팅 링크 -->
            <a href={`/characters/${c.id}`}>
                <!-- 색 배경경 -->
                <div
                    class="absolute top-0 left-0 w-full h-full z-0"
                    class:bg-purple-600={c.rarity.id === 4}
                    class:bg-yellow-500={c.rarity.id === 5}
                    class:bg-orange-700={c.rarity.id === 6}
                ></div>
                <!-- 위에 얹는 그라데이션 -->
                <div
                    class="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"
                ></div>
                <img
                    src={c.menu_img}
                    alt={c.name}
                    class="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain scale-100"
                />
                <!-- 하단 그라데이션 -->
                <div
                    class="absolute bottom-0 left-0 w-full h-30 bg-gradient-to-t from-black/100 to-transparent z-20"
                ></div>
                <h3
                    class="relative text-xl font-bold text-white mb-2 z-30 text-center"
                >
                    {c.name}
                </h3>

                <!-- 커서 올릴시 -->
                <div
                    class="absolute inset-0 z-40 bg-black/80 text-white p-2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2"
                >
                    <div class="flex space-x-2">
                        <img src={c.element.img} alt={c.element.name} />
                        <p class="text-sm">{c.element.name}</p>
                    </div>
                    <div class="flex space-x-2">
                        <img src={c.weapon_type.img} alt={c.weapon_type.name} />
                        <p class="text-sm">{c.weapon_type.name}</p>
                    </div>
                    <div class="flex space-x-2">
                        <img src={c.class.img} alt={c.class.name} />
                        <p class="text-sm">{c.class.name}</p>
                    </div>
                </div>
            </a>
        </li>
    {/each}
</ul>
