<script>
    import Logo from "./logo.svelte";
    import MenuItems from "./menuItems.svelte";
</script>

<!-- navbar 틀 -->
<div
    class="hidden md:flex flex-col w-64 min-h-screen bg-base-300 shadow-sm fixed top-0 left-0 overflow-x-hidden overflow-y-auto"
>
    <Logo />
    <MenuItems />
</div>
