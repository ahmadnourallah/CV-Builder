import Icon from "@mdi/react";

function SecondaryButton({
	children,
	type = "button",
	className = undefined,
	onClick = undefined,
	iconPath = undefined,
}) {
	return (
		<button
			className={className}
			style={{
				display: "flex",
				alignItems: "center",
				fontFamily: "NotoSans-Bold",
				fontSize: "14px",
				border: "1px solid #808080",
				color: "#808080",
				padding: "calc(var(--gap-sm) * 1.5) var(--gap-md)",
				transition: "background-color 200ms",
				borderRadius: "5px",
			}}
			type={type}
			onClick={onClick}
		>
			{iconPath && <Icon path={iconPath} size="20px" />}
			{children}
		</button>
	);
}

export default SecondaryButton;
