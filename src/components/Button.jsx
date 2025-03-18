import Icon from "@mdi/react";

function Button({ text, styles, iconClr, iconPath, onClick }) {
	return (
		<button
			style={{
				display: "flex",
				alignItems: "center",
				gap: "var(--gap-sm)",
				fontWeight: "bold",
				padding: "10px",
				borderRadius: "5px",
				fontSize: "14px",
				...styles,
			}}
			onClick={onClick}
		>
			{iconPath && <Icon path={iconPath} size="20px" color={iconClr} />}
			<span>{text}</span>
		</button>
	);
}

export default Button;
