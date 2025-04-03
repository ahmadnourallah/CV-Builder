import { useId } from "react";
import "../../styles/colorInput.css";

function ColorInput({ label, value, onChange }) {
	const id = useId();

	return (
		<label className="colorInput" htmlFor={id}>
			{label}
			<input id={id} type="color" value={value} onChange={onChange} />
		</label>
	);
}

export default ColorInput;
