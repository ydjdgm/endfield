<script lang="ts">
    export let character;
    import { Swords, Cross, Shield } from "@lucide/svelte";
</script>

<div
    class="flex justify-center w-[51.9vw] text-white bg-neutral-800 font-bold p-3 mt-30"
>
    <p class="text-2xl font-bold">기본 스탯</p>
</div>
<div class="flex space-x-[1.3vw] -mt-3">
    <div
        class="w-[12vw] text-white bg-neutral-800 font-bold mt-10 p-3 space-y-4 border border-{character
            .element.color} shadow-sm"
    >
        <div class="flex items-center justify-center space-x-3">
            <img src="/char/profile/strength.webp" alt="힘" class="w-5 h-5" />
            <p class="text-lg font-bold">힘</p>
        </div>
        <div class="h-[1px] w-full bg-white/10"></div>
        <div class="flex justify-center"><p>{character.strength}</p></div>
    </div>
    <div
        class="w-[12vw] text-white bg-neutral-800 font-bold mt-10 p-3 space-y-4 border border-{character
            .element.color} shadow-sm"
    >
        <div class="flex items-center justify-center space-x-3">
            <img src="/char/profile/agility.webp" alt="민첩" class="w-5 h-5" />
            <p class="text-lg font-bold">민첩</p>
        </div>
        <div class="h-[1px] w-full bg-white/10"></div>
        <div class="flex justify-center"><p>{character.agility}</p></div>
    </div>
    <div
        class="w-[12vw] text-white bg-neutral-800 font-bold mt-10 p-3 space-y-4 border border-{character
            .element.color} shadow-sm"
    >
        <div class="flex items-center justify-center space-x-3">
            <img
                src="/char/profile/intellect.webp"
                alt="지능"
                class="w-5 h-5"
            />
            <p class="text-lg font-bold">지능</p>
        </div>
        <div class="h-[1px] w-full bg-white/10"></div>
        <div class="flex justify-center"><p>{character.intellect}</p></div>
    </div>
    <div
        class="w-[12vw] text-white bg-neutral-800 font-bold mt-10 p-3 space-y-4 border border-{character
            .element.color} shadow-sm"
    >
        <div class="flex items-center justify-center space-x-3">
            <img src="/char/profile/will.webp" alt="의지" class="w-5 h-5" />
            <p class="text-lg font-bold">의지</p>
        </div>
        <div class="h-[1px] w-full bg-white/10"></div>
        <div class="flex justify-center"><p>{character.will}</p></div>
    </div>
</div>
<div class="flex space-x-[1.3vw] -mt-5">
    <div
        class="w-[16.43vw] text-white bg-neutral-800 font-bold mt-10 p-3 space-y-4 border border-{character
            .element.color} shadow-sm"
    >
        <div class="flex items-center justify-center space-x-3">
            <Swords class="w-5 h-5" />
            <p class="text-lg font-bold">기초 공격력</p>
        </div>
        <div class="h-[1px] w-full bg-white/10"></div>
        <div class="flex justify-center"><p>{character.atk}</p></div>
    </div>
    <div
        class="w-[16.43vw] text-white bg-neutral-800 font-bold mt-10 p-3 space-y-4 border border-{character
            .element.color} shadow-sm"
    >
        <div class="flex items-center justify-center space-x-3">
            <Cross class="w-5 h-5" />
            <p class="text-lg font-bold">기초 체력</p>
        </div>
        <div class="h-[1px] w-full bg-white/10"></div>
        <div class="flex justify-center"><p>{character.hp}</p></div>
    </div>
    <div
        class="w-[16.43vw] text-white bg-neutral-800 font-bold mt-10 p-3 space-y-4 border border-{character
            .element.color} shadow-sm"
    >
        <div class="flex items-center justify-center space-x-3">
            <Shield class="w-5 h-5" />
            <p class="text-lg font-bold">기초 방어력</p>
        </div>
        <div class="h-[1px] w-full bg-white/10"></div>
        <div class="flex justify-center"><p>{character.def}</p></div>
    </div>
</div>
