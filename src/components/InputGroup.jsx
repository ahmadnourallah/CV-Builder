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

			{Array.isArray(children) ? (
				<div
					className="inputWrapper"
					style={{
						display: "flex",
						alignItems: "center",
						gap: "var(--gap-md)",
					}}
				>
					{children.map((child) => cloneElement(child, { id }))}
				</div>
			) : (
				cloneElement(children, { id })
			)}
		</div>
	);
}

export default InputGroup;
