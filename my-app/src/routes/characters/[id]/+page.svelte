<script>
    export let data;
    const character = data.character;
    import { Sparkle } from "@lucide/svelte";
</script>

<div class="w-full relative">
    <img
        src="/{character.header_img}"
        alt={character.name}
        class="w-[50vw] -mt-25 pointer-events-none"
    />
    <div
        class="absolute p-4 w-50.5 right-1/2 top-[60vh] text-white bg-neutral-900 font-bold"
    >
        <!-- 고정된 사각형, 삐져나온 선들 (불규칙 길이) -->
        <!-- 상단선: 좌측 짧게 -->
        <div
            class="absolute top-0 left-[-12px] w-[calc(100%+24px)] h-[1px] bg-white"
        ></div>
        <!-- 하단선: 우측 길게 -->
        <div
            class="absolute bottom-0 right-[-28px] w-[calc(100%+56px)] h-[2px] bg-white"
        ></div>
        <!-- 좌측 세로선: 위쪽 짧게 -->
        <div
            class="absolute top-[-10px] left-0 h-[calc(100%+20px)] w-[1px] bg-white"
        ></div>
        <!-- 우측 세로선: 아래쪽 길게 -->
        <div
            class="absolute bottom-[-18px] right-0 h-[calc(100%+36px)] w-[2px] bg-white"
        ></div>

        <!-- 콘텐츠 -->
        <div class="flex flex-nowrap items-center space-x-4">
            <h1 class="text-2xl font-black tracking-tight uppercase">
                {character.name}
            </h1>
            <div class="flex space-x-0.5">
                {#each Array(character.rarity.id) as _, i}
                    <Sparkle key={i} class="w-4 h-4" />
                {/each}
            </div>
        </div>
        <div class="flex space-x-4 mt-2 justify-center">
            <img
                src={`/${character.element.img}`}
                alt={character.element.name}
                class=""
            />
            <img
                src={`/${character.class.img}`}
                alt={character.class.name}
                class=""
            />
            <img
                src={`/${character.weapon_type.img}`}
                alt={character.weapon_type.name}
                class=""
            />
        </div>
    </div>
</div>
