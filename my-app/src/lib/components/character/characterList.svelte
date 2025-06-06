<script lang="ts">
    type Character = {
        id: number;
        name: string;
        menu_img: string;
        rarity: { id: number };
        element: { id: number; name: string; img: string };
        class: { id: number; name: string; img: string };
        weapon_type: { id: number; name: string; img: string };
    };

    export let characters: Character[] = [];
</script>

<ul class="flex flex-wrap gap-3 mt-20 justify-center">
    {#each characters as c}
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
