<script lang="ts">
	type Weapon = {
		id: number;
		name: string;
		weapon_img: string;
		stat1: string;
		stat2: string | null;
		stat3: string | null;
		description: string;
		rarity: Array<{ id: number }>;
		weapon_type: Array<{ id: number; name: string; img: string }>;
		character: Array<{ name: string; menu_img: string }> | null;
	};

	export let weapon: Weapon;
</script>

<div class="rounded-lg border gap-4 p-4 bg-gray-900 space-y-3">
	<div class="flex space-x-5">
		<img
			src={weapon.weapon_img || "/placeholder.webp"}
			alt={weapon.name}
			class="aspect-square object-cover rounded-md w-20 h-20 border"
		/>

		<div class="lg:col-span-3 flex flex-col space-y-3">
			<div>
				<h3 class="text-2xl font-bold text-white">{weapon.name}</h3>
				<p class="text-sm text-gray-400">
					{weapon.rarity[0]?.id || "?"}성 | {weapon.weapon_type[0]
						?.name || "알 수 없음"}
				</p>
			</div>

			<div class="text-gray-200 space-y-1">
				<p>{weapon.stat1}</p>
				{#if weapon.stat2}
					<p>{weapon.stat2}</p>
				{/if}
				{#if weapon.stat3}
					<p>{weapon.stat3}</p>
				{/if}
			</div>

			{#if weapon.character && weapon.character.length > 0}
				<div class="border-t border-gray-700 pt-3 mt-auto">
					<div class="flex items-center gap-3">
						<img
							src={weapon.character[0]?.menu_img}
							alt={weapon.character[0]?.name}
							class="w-10 h-10 rounded-full"
						/>
						<div>
							<p class="text-xs text-gray-500">전용 캐릭터</p>
							<p class="font-semibold text-gray-100">
								{weapon.character[0]?.name}
							</p>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
	<p class="text-gray-300 text-base leading-relaxed">
		{weapon.description}
	</p>
</div>
