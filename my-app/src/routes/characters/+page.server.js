import { supabase } from '$lib/supabaseClient';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// 여러 개의 비동기 DB 요청을 병렬로 처리합니다.
	const [characterRes, rarityRes, elementRes, classRes, weaponTypeRes] = await Promise.all([
		// 1. 캐릭터 목록 조회 (관련 테이블 정보 포함)
		supabase.from('character').select('*, rarity(*), element(*), class(*), weapon_type(*)'),
		// 2. 희귀도 목록 조회
		supabase.from('rarity').select('*'),
		// 3. 속성 목록 조회
		supabase.from('element').select('*'),
		// 4. 클래스 목록 조회
		supabase.from('class').select('*'),
		// 5. 무기 타입 목록 조회
		supabase.from('weapon_type').select('*')
	]);

	// 각 요청에 대한 에러 핸들링 (실제 프로덕션에서는 더 상세한 처리가 필요합니다)
	if (characterRes.error) throw new Error(`캐릭터 정보 로딩 실패: ${characterRes.error.message}`);
	if (rarityRes.error) throw new Error(`희귀도 정보 로딩 실패: ${rarityRes.error.message}`);
	if (elementRes.error) throw new Error(`속성 정보 로딩 실패: ${elementRes.error.message}`);
	if (classRes.error) throw new Error(`클래스 정보 로딩 실패: ${classRes.error.message}`);
	if (weaponTypeRes.error) throw new Error(`무기 타입 정보 로딩 실패: ${weaponTypeRes.error.message}`);

	// 조회한 모든 데이터를 객체에 담아 페이지로 전달
	return {
		characters: characterRes.data,
		rarities: rarityRes.data,
		elements: elementRes.data,
		classes: classRes.data,
		weapon_types: weaponTypeRes.data
	};
}