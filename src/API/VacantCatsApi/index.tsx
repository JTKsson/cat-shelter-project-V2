import { CatListItemType } from "@/types/CatTypes";
import { createClient } from "@/utils/supabase/server";

export const VacantCatsApi = async () => {
	const supabase = createClient();
	const { data, error } = await supabase.from("cats").select();

	return { data, error };
};
