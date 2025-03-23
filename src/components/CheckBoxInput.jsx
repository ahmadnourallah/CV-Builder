import "../styles/checkBoxInput.css";

function CheckBoxInput({ label, onChange, checked }) {
	const id = crypto.randomUUID();

	return (
		<div className="checkboxInput">
			<input
				checked={checked}
				type="checkbox"
				id={id}
				onChange={(e) => onChange(e.target.checked)}
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	);
}

export default CheckBoxInput;
