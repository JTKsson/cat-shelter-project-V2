import { CatListItemType } from "@/types/CatTypes";
import { createClient } from "@/utils/supabase/client";
const supabase = createClient();

export const GetCats = async () => {
	const { data, error } = await supabase.from("cats").select();
	return { data, error };
};

export const UploadImage = async (file: File) => {
	console.log("File from api:", file);

	const fullFileName = file.name.split(".");
	const fileName = fullFileName[0];
	const fileExt = fullFileName[1];

	const filePath = `${fileName}-${Math.random()}.${fileExt}`;

	const { data, error } = await supabase.storage.from("catImages").upload(filePath, file, {
		cacheControl: "3600",
		upsert: false,
	});

	if (error) {
		return { error };
	}

	const { data: publicUrl } = supabase.storage.from("catImages").getPublicUrl(data.path);
	return {
		publicUrl,
	};
};

export const AddCatApi = async ({ name, year, desc, image }: CatListItemType) => {
	let imageUrl: string | undefined;

	if (image) {
		const { publicUrl, error } = await UploadImage(image);

		if (!error) {
			imageUrl = publicUrl.publicUrl;
		}

		try {
			const { error } = await supabase.from("cats").insert({
				name: name,
				year: year,
				desc: desc,
				image_url: imageUrl,
			});

			return { error };
		} catch (error) {
			console.error(error);
		}
	}
};

export const DeleteCatApi = async (id: string | undefined) => {
	const { error } = await supabase.from("cats").delete().eq("id", id);

	if (error) {
		console.error("Error deleting cat:", error);
	}
};
