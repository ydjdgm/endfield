import { supabase } from '$lib/supabaseClient';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const [weaponsRes, weaponTypesRes, raritiesRes] = await Promise.all([
        // 1. 전체 무기 목록 조회 (관련 테이블 정보 포함)
        supabase.from('weapon').select('*, weapon_type(*), rarity(*), character(name, menu_img)'),

        // 2. 필터링을 위한 무기 종류 목록 조회
        supabase.from('weapon_type').select('*'),

        // 3. 필터링을 위한 희귀도 목록 조회 (3, 4, 5, 6성만)
        supabase.from('rarity').select('id').gte('id', 3)
    ]);

    // 에러 핸들링
    if (weaponsRes.error) throw new Error(`무기 정보 로딩 실패: ${weaponsRes.error.message}`);
    if (weaponTypesRes.error) throw new Error(`무기 종류 정보 로딩 실패: ${weaponTypesRes.error.message}`);
    if (raritiesRes.error) throw new Error(`희귀도 정보 로딩 실패: ${raritiesRes.error.message}`);

    // 조회한 모든 데이터를 객체에 담아 페이지로 전달
    return {
        weapons: weaponsRes.data,
        weapon_types: weaponTypesRes.data,
        rarities: raritiesRes.data
    };
}