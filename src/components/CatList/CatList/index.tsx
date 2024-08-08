import { CatListItemType } from "@/types/CatTypes";

interface Props {
	data: CatListItemType[];
}

export const CatList = ({ data }: Props) => {
	return (
		<>
			{data &&
				data.map((cat: CatListItemType) => (
					<div key={cat.id} style={{ width: "500px", height: "500px" }}>
						<h2>{cat.name}</h2>
						<p>{cat.year}</p>
						<p>{cat.desc}</p>
						<img src={cat.image_url} alt={`image of ${cat.name}`} width={500} />
					</div>
				))}
		</>
	);
};
