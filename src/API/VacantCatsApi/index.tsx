import { CatListItemType } from "@/types/CatTypes";
import { createClient } from "@/utils/supabase/client";
const supabase = createClient();

export const GetCats = async () => {
	const { data, error } = await supabase.from("cats").select();
	return { data, error };
};

export const AddCatApi = async ({ name, year, desc, image_url = "" }: CatListItemType) => {
	try {
		const { error } = await supabase.from("cats").insert({
			name: name,
			year: year,
			desc: desc,
			image_url: image_url,
		});
	} catch (error) {
		console.error(error);
	}
};
