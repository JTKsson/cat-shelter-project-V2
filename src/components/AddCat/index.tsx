"use client";
import { useState } from "react";
import CatForm from "../CatForm";
import { AddCatApi, UploadImage } from "@/API/VacantCatsApi";
import { CatListItemType } from "@/types/CatTypes";

const AddCat = () => {
	const [formData, setFormData] = useState<CatListItemType>({
		name: "",
		year: "",
		desc: "",
		image: null,
	});

	const handleChange = (e: { target: { name: string; value: string } }) => {
		const { name, value } = e.target;

		if (name === "image") {
			const fileInput = e.target as HTMLInputElement;
			const file = fileInput.files?.[0];

			if (file) {
				console.log("File selected:", file);
				setFormData((prevData) => ({ ...prevData, [name]: file }));
			}
		} else {
			setFormData((prevData) => ({ ...prevData, [name]: value }));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const response = await AddCatApi(formData);

			if (!response) {
				console.error("Unexpected response from addCat:", response);
				return;
			}

			if (response.error) {
				console.error("Error adding cat:", response.error);
			} else {
				console.log("Cat added successfully!");
				setFormData({
					name: "",
					year: "",
					desc: "",
					image: null,
				});
			}
		} catch (error) {
			console.error("Error:", error);
		}

		console.log({ formData });
	};

	return <CatForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />;
};

export default AddCat;
