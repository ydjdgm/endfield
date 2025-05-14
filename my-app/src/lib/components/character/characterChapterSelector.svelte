<script>
    function scrollToHeader() {
        const el = document.getElementById("header");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    function scrollToStat() {
        const el = document.getElementById("stat");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    function scrollToSkill() {
        const el = document.getElementById("skill");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    function scrollToTalent() {
        const el = document.getElementById("talent");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }
</script>

<div
    class="fixed top-1/2 right-[1vw] -translate-y-1/2 z-50 flex flex-col space-y-2 p-3 bg-neutral-900/70 rounded-xl shadow-lg backdrop-blur-sm"
>
    <button
        on:click={scrollToHeader}
        class="btn btn-md btn-neutral hover:btn-primary">해더</button
    >
    <button
        on:click={scrollToStat}
        class="btn btn-md btn-neutral hover:btn-primary">기본 스탯</button
    >
    <button
        on:click={scrollToSkill}
        class="btn btn-md btn-neutral hover:btn-primary">스킬</button
    >
    <button
        on:click={scrollToTalent}
        class="btn btn-md btn-neutral hover:btn-primary">재능</button
    >
</div>
