<script>
    export let data;
    const character = data.character;
</script>

<img
    class="absolute z-0 pointer-events-none sclae 50"
    src={`/${character.header_img}`}
    alt={character.name}
/>
<h1>{character.name}</h1>
<img src={`/${character.element.img}`} alt="속성" />
<img src={`/${character.class.img}`} alt="클래스" />
<img src={`/${character.weapon_type.img}`} alt="무기" />
