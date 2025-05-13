import { supabase } from "$lib/supabaseClient";

/** @type {import('./$types').PageServerLoad} */

export async function load() {
    const { data: character, error } = await supabase
        // 테이블 선택
        .from("character")
        // mysql select 하는것처럼 하면 됨 + element(name, img) 이렇게 하면 join처럼 됨
        .select('id, name, menu_img, rarity(id), element(id, name, img), class(id, name, img), weapon_type(id, name, img)');

    // 에러 핸들링
    if (error) {
        console.error('Supabase error:', error);
        throw new Error('Failed to load character data');
    }

    return {
        character,
    };
}