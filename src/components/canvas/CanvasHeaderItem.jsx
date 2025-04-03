import Icon from "@mdi/react";

function CanvasHeaderItem({ icon, text }) {
	return (
		<div
			className="item"
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexWrap: "wrap",
				rowGap: "var(--gap-lg)",
				columnGap: "var(--gap-sm)",
			}}
		>
			<Icon path={icon} size="20px" color="#FFF" />
			<span>{text}</span>
		</div>
	);
}

export default CanvasHeaderItem;
