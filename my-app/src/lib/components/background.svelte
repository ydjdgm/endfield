<!-- navbar랑 children이 안겹치게 -->
<div
    class="md:ml-64 relative w-full min-h-screen overflow-x-hidden overflow-y-auto md:w-[calc(100%-16rem)] bg-black"
>
    <!-- 배경 png -->
    <img
        src="bg.jpg"
        alt="배경"
        class="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none z-1"
        aria-hidden="true"
    />
    <!-- 배경 그라데이션 -->
    <div
        class="absolute inset-0 pointer-events-none z-5
           bg-gradient-to-b
           from-transparent
           via-black/60
           to-black"
    >
        <!-- children 상호작용 가능하게 -->
        <div class="relative z-20 pointer-events-auto">
            <slot />
        </div>
    </div>
</div>
