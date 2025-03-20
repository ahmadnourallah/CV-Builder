import { cloneElement } from "react";

function InputGroup({ label, children }) {
	const id = crypto.randomUUID();

	return (
		<div
			className="inputGroup"
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "var(--gap-md)",
				marginBottom: "var(--gap-md)",
			}}
		>
			<label
				htmlFor={id}
				style={{
					fontFamily: "NotoSans-Bold",
				}}
			>
				{label}
			</label>
			{cloneElement(children, { id })}
		</div>
	);
}

export default InputGroup;
