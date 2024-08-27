interface Props {
	handleSubmit: any;
	handleChange: any;
	formData: any;
}

const CatForm = ({ handleSubmit, handleChange, formData }: Props) => {
	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name: <br />
				<input type='text' name='name' value={formData.name} onChange={handleChange} />
			</label>
			<br />
			<label>
				Year: <br />
				<input type='text' name='year' value={formData.year} onChange={handleChange} />
			</label>
			<br />
			<label>
				Description: <br />
				<textarea name='desc' value={formData.desc} onChange={handleChange} />
			</label>
			<br />
			<label>
				Image: <br />
				<input type='file' name='image' accept='image/*' onChange={handleChange} />
			</label>
			<br />
			<button type='submit'>Add Cat</button>
		</form>
	);
};

export default CatForm;
