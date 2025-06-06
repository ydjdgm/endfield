import { supabase } from "$lib/supabaseClient";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const characterId = params.id;

    const { data: character, error } = await supabase
        .from("character")
        .select(`
            id,
            name,
            header_img,
            rarity(id),
            element(id, name, img, color),
            class(id, name, img),
            weapon_type(id, name, img),
            strength,
            agility,
            intellect,
            will,
            atk,
            hp,
            def,
            skill(
                id,
                name,
                type,
                cost,
                description(id, description),
                multiplier(id, name, mul)
            ),
            talent(id, name, type, description),
            potential(id, name, description),
            zf
        `)
        .eq("id", characterId)
        .order("id", { foreignTable: "skill", ascending: true })                // skill 정렬
        .order("id", { foreignTable: "skill.description", ascending: true })                // desc 정렬
        .order("id", { foreignTable: "skill.multiplier", ascending: true })         // multiplier 정렬
        .order("id", { foreignTable: "talent", ascending: true })
        .order("id", { foreignTable: "potential", ascending: true })         // desc 정렬
        .single();

    if (error) {
        console.error('Supabase error:', error);
        throw new Error('Failed to load character');
    }

    return {
        character,
    };
}
