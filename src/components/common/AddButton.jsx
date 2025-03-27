import Icon from "@mdi/react";

function AddButton({ className = undefined, children, onClick, iconPath }) {
	return (
		<button
			className={className}
			style={{
				display: "flex",
				alignItems: "center",
				gap: "var(--gap-sm)",
				fontFamily: "NotoSans-Bold",
				fontSize: "14px",
				padding:
					"var(--gap-md) calc(var(--gap-md) * 2) var(--gap-md) var(--gap-md)",
				border: "5px solid var(--grey-clr)",
				borderRadius: "30px",
			}}
			onClick={onClick}
		>
			{iconPath && <Icon path={iconPath} size="20px" />}
			{children}
		</button>
	);
}

export default AddButton;
