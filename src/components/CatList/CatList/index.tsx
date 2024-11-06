"use client";
import { CatListItemType } from "@/types/CatTypes";
import Styles from "../CatList.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import { DeleteCat } from "@/components/DeleteCat";

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

	const handleDelete = (id: string) => {
		setCats(cats.filter((cat) => cat.id !== id));
	};

	return (
		<div className={Styles.catList}>
			{cats.map((cat: CatListItemType) => (
				<div key={cat.id} className={Styles.catListItem}>
					<section>
						<h2>{cat.name}</h2>
						<p>{cat.year}</p>
						<p>{cat.desc}</p>
						<DeleteCat id={cat.id} onDelete={handleDelete} imageUrl={cat.image_url} />
					</section>
					{cat.image_url && (
						<Image
							src={cat.image_url}
							alt={`image of ${cat.name}`}
							width={100}
							height={50}
						/>
					)}
				</div>
			))}
		</div>
	);
};
