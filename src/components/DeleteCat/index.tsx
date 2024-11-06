import { DeleteCatApi, DeleteImage } from "@/API/VacantCatsApi";

interface Props {
	id: string | undefined;
	onDelete: (id: string) => void;
	imageUrl?: string;
}

export const DeleteCat = ({ id, onDelete, imageUrl }: Props) => {
	const handleDelete = async () => {
		const confirm = window.confirm("Are you sure?");

		if (confirm && id) {
			try {
				if (imageUrl) {
					await DeleteImage(imageUrl);
				}
				await DeleteCatApi(id);
				onDelete(id);
			} catch (error) {
				console.error(error);
			}
		}
	};

	return <button onClick={handleDelete}>Delete</button>;
};
