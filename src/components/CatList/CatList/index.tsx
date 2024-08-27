"use client";
import { CatListItemType } from "@/types/CatTypes";
import Styles from "../CatList.module.scss";
import { useEffect, useState } from "react";

interface Props {
	data: CatListItemType[];
}

export const CatList = ({ data }: Props) => {
	const [cats, setCats] = useState<CatListItemType[]>([]);

	useEffect(() => {
		try {
			if (data) {
				setCats(data);
			}
		} catch (error) {
			console.error(error);
		}
	}, [data]);

	return (
		<div className={Styles.catList}>
			{cats.map((cat: CatListItemType) => (
				<div key={cat.id} className={Styles.catListItem}>
					<section>
						<h2>{cat.name}</h2>
						<p>{cat.year}</p>
						<p>{cat.desc}</p>
					</section>
					<img src={cat.image_url} alt={`image of ${cat.name}`} />
				</div>
			))}
		</div>
	);
};
