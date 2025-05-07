<script>
    export let data;
    // 이제 data.character는 아래와 같은 순수 배열입니다:
    // [
    //   { id: 1, name: '관리자', element: { name: '물리', img: '…' } },
    //   { id: 2, name: '펠리카', element: { … } },
    //   …
    // ]
    const characters = data.character;
</script>

{#each characters as c}
    <div>
        <h2>{c.name}</h2>
        <img src={c.element.img} alt={c.element.name} />
    </div>
{/each}
