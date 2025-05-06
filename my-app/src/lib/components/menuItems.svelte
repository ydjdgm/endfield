<script>
    import { House, Users } from "@lucide/svelte";
    const menuItems = [
        { name: "홈", icon: House, href: "/" },
        { name: "캐릭터", icon: Users, href: "/characters" },
    ];
</script>

<ul class="menu menu-vertical flex-1 pt-6 p-0 w-full">
    {#each menuItems as item}
        <li class="">
            <a
                href={item.href}
                class="group hover:bg-base-200 flex items-center space-x-3 py-2.5 pl-6"
            >
                <svelte:component
                    this={item.icon}
                    class="w-7 h-7 transform transition-transform duration-200 ease-in-out group-hover:scale-110"
                />
                <span
                    class="text-lg font-medium transform transition-transform duration-200 ease-in-out group-hover:scale-105"
                    >{item.name}</span
                >
            </a>
        </li>
    {/each}
</ul>
