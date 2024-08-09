import { GetCats } from "@/API/VacantCatsApi";
import { CatList } from "@/components/CatList/CatList";

const VacantCats = async () => {
	const { data } = await GetCats();

	return (
		<>
			<h1>Vacant Cats</h1>
			<CatList data={data ?? []} />
		</>
	);
};

export default VacantCats;
