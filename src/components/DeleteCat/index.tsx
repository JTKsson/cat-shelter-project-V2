// DeleteCat.tsx
import { CatListItemType } from "@/types/CatTypes";
import { DeleteCatApi } from "@/API/VacantCatsApi";

interface Props {
	id: string | undefined;
	onDelete: (id: string) => void;
}

export const DeleteCat = ({ id, onDelete }: Props) => {
	const handleDelete = async () => {
		const confirm = window.confirm("Are you sure?");

		if (confirm && id) {
			try {
				await DeleteCatApi(id);
				onDelete(id);
			} catch (error) {
				console.error(error);
			}
		}
	};

	return <button onClick={handleDelete}>Delete</button>;
};
