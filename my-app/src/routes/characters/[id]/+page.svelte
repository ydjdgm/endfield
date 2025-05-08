<script>
    export let data;
    const character = data.character;
</script>

<img
    class="absolute z-0 pointer-events-none w-300 -mt-40"
    src={`/${character.header_img}`}
    alt={character.name}
/>

<div class="absolute mt-160 ml-140 w-[22rem] p-6 text-white bg-neutral-900 overflow-visible font-mono">
  <!-- 고정된 사각형, 삐져나온 선들 (불규칙 길이) -->
<!-- 상단선: 좌측 짧게 -->
<div class="absolute top-0 left-[-12px] w-[calc(100%+24px)] h-[1px] bg-white"></div>

<!-- 하단선: 우측 길게 -->
<div class="absolute bottom-0 right-[-28px] w-[calc(100%+56px)] h-[1.5px] bg-white"></div>

<!-- 좌측 세로선: 위쪽 짧게 -->
<div class="absolute top-[-10px] left-0 h-[calc(100%+20px)] w-[1px] bg-white"></div>

<!-- 우측 세로선: 아래쪽 길게 -->
<div class="absolute bottom-[-18px] right-0 h-[calc(100%+36px)] w-[1.3px] bg-white"></div>

  

  <!-- 콘텐츠 -->
  <h1 class="text-2xl font-black tracking-tight mb-4">{character.name}</h1>
  <div class="flex justify-between">
    <img src={`/${character.element.img}`} class="" />
    <img src={`/${character.class.img}`} class="" />
    <img src={`/${character.weapon_type.img}`} class="" />
  </div>
</div>
