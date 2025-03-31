import { useId } from "react";
import "../../styles/checkBoxInput.css";

function CheckBoxInput({ label, onChange, checked }) {
	const id = useId();

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
