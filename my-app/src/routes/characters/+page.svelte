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

<ul>
    {#each characters as c}
        <li>
            <!-- 동적 라우팅 링크 -->
            <a href={`/characters/${c.id}`}>
                <div>
                    <h1>{c.name}</h1>
                    <img
                        src={c.class.img}
                        alt={c.class.name}
                        width="50"
                        height="50"
                    />
                </div>
            </a>
        </li>
    {/each}
</ul>
<div
    class="w-52 h-64 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 p-4 flex flex-col justify-end transition-border duration-200 hover:border-white/60"
>
    <h3 class="text-xl font-bold text-white mb-2">name</h3>
    <div class="flex items-center space-x-2">
        <img src="" alt="" class="w-5 h-5" />
        <span class="text-white">name</span>
    </div>
</div>
