"use client";
import { GetCats } from "@/API/VacantCatsApi";
import AddCat from "@/components/AddCat";
import { CatList } from "@/components/CatList/CatList";
import { SignOutButton } from "@/components/SignOutButton";
import { CatListItemType } from "@/types/CatTypes";
import { useUser } from "@/utils/user/hooks";
import { useEffect, useState } from "react";

const VacantCats = () => {
	const [cats, setCats] = useState<CatListItemType[]>([]);
	const { user } = useUser();

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
	}, []);

	return (
		<>
			<h1>Vacant Cats</h1>
			<SignOutButton />
			<CatList data={cats ?? []} />
			{user && <AddCat />}
		</>
	);
};

export default VacantCats;
