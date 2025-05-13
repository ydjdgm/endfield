import { supabase } from "$lib/supabaseClient";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const characterId = params.id;

    const { data: character, error } = await supabase
        .from("character")
        .select('id, name, header_img, rarity(id), element(id, name, img, color), class(id, name, img), weapon_type(id, name, img), strength, agility, intellect, will, atk, hp, skill(id, name, type, cost, desc(id, desc), multiplier(id, name, mul))')
        .eq("id", characterId)
        .single(); // id로 검색할 때는 .single() 써주면 객체 하나만 반환됨

    if (error) {
        console.error('Supabase error:', error);
        throw new Error('Failed to load character');
    }

    return {
        character,
    };
}
