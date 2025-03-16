import Icon from "@mdi/react";

function CanvasHeaderItem({ icon, text }) {
	return (
		<div
			className="item"
			style={{
				display: "flex",
				alignItems: "center",
				gap: "var(--gap-sm)",
			}}
		>
			<Icon path={icon} size="20px" color="#FFF" />
			<span>{text}</span>
		</div>
	);
}

export default CanvasHeaderItem;
