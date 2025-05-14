<script>
    export let data;
    const character = data.character;
    import CharacterHeader from "$lib/components/character/characterHeader.svelte";
    import CharacterStats from "$lib/components/character/characterStats.svelte";
    import CharacterSkills from "$lib/components/character/characterSkills.svelte";

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
</script>

<CharacterHeader {character} />
<CharacterStats {character} />
<CharacterSkills {character} />

<img src="/{character.header_img}" />

<div class="fixed top-1/2 right-[1vw] -translate-y-1/2 z-50 flex flex-col space-y-2 p-3 bg-neutral-900/70 rounded-xl shadow-lg backdrop-blur-sm">
	<button on:click={scrollToHeader} class="btn btn-md btn-neutral hover:btn-primary">Header</button>
	<button on:click={scrollToStat} class="btn btn-md btn-neutral hover:btn-primary">Stat</button>
	<button on:click={scrollToSkill} class="btn btn-md btn-neutral hover:btn-primary">Skill</button>
</div>
