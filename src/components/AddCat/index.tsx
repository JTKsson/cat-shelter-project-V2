"use client";
import { useState } from "react";
import CatForm from "../CatForm";
import { AddCatApi } from "@/API/VacantCatsApi";

const AddCat = () => {
	const [formData, setFormData] = useState({
		name: "",
		year: "",
		desc: "",
		image: null,
	});

	const handleChange = (e: { target: { name: string; value: string } }) => {
		const { name, value } = e.target;

		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = async () => {
		if (formData.image) {
			console.log("yep, there's an image here");
		}
		await AddCatApi(formData);
	};

	return <CatForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />;
};

export default AddCat;
