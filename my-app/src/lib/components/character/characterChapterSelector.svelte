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
    function scrollToPotential() {
        const el = document.getElementById("potential");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    function scrollToWeapon() {
        const el = document.getElementById("weapon");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    function scrollToParty() {
        const el = document.getElementById("party");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    function scrollToGear() {
        const el = document.getElementById("gear");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    function scrollToZf() {
        const el = document.getElementById("zf");
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
        on:click={scrollToZf}
        class="btn btn-md btn-neutral hover:btn-primary">캐릭터 요약</button
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
    <button
        on:click={scrollToPotential}
        class="btn btn-md btn-neutral hover:btn-primary">잠재력</button
    >
    <button
        on:click={scrollToWeapon}
        class="btn btn-md btn-neutral hover:btn-primary">무기 효율</button
    >
    <button
        on:click={scrollToGear}
        class="btn btn-md btn-neutral hover:btn-primary">기어</button
    >
    <button
        on:click={scrollToParty}
        class="btn btn-md btn-neutral hover:btn-primary">추천 조합</button
    >
</div>
