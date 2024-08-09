import { createClient } from "@/utils/supabase/server";
const supabase = createClient();

export const GetCats = async () => {
	const { data, error } = await supabase.from("cats").select();

	return { data, error };
};

export const AddCat = async () => {
	const { error } = await supabase
		.from("cats")
		.insert({
			name: "test1",
			year: "1337",
			desc: "fu bar",
			image_url:
				"https://media.4-paws.org/7/b/8/4/7b84da50b67c8c39b9deb0d6581efa3309960ed6/VIER%20PFOTEN_2019-12-13_209-2001x2000-600x600.jpg",
		});
};
