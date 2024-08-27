"use client";
import { GetCats } from "@/API/VacantCatsApi";
import AddCat from "@/components/AddCat";
import { CatList } from "@/components/CatList/CatList";
import { CatListItemType } from "@/types/CatTypes";
import { useEffect, useState } from "react";

const VacantCats = () => {
	const [cats, setCats] = useState<CatListItemType[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data, error } = await GetCats();

				if (error) {
					console.error("Error fetching cats:", error);
				} else {
					setCats(data || []);
				}
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, [cats]);

	return (
		<>
			<h1>Vacant Cats</h1>
			<CatList data={cats ?? []} />
			<AddCat />
		</>
	);
};

export default VacantCats;
