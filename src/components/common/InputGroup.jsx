import { useId, cloneElement } from "react";

function InputGroup({ label, tip, children }) {
	const id = useId();

	return (
		<div
			className="inputGroup"
			style={{
				display: "flex",
				flexDirection: "column",
				gap: ".5rem",
				marginBottom: "1rem",
			}}
		>
			<label
				htmlFor={id}
				style={{
					fontFamily: "NotoSans-Bold",
				}}
			>
				{label}
				<span
					style={{
						color: "#9ca3af",
						fontSize: "13px",
						marginLeft: "var(--gap-sm)",
					}}
				>
					{tip}
				</span>
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
					{children.map((child, index) =>
						cloneElement(child, { key: index, id })
					)}
				</div>
			) : (
				cloneElement(children, { id })
			)}
		</div>
	);
}

export default InputGroup;
