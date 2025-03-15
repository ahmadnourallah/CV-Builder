import CanvasHeader from "./CanvasHeader";
import CanvasBody from "./CanvasBody";

function Canvas({ CV }) {
	return (
		<div
			className="canvas shadow"
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "var(--gap-lg)",
				maxWidth: "8.27in",
				minHeight: "11.67in",
				backgroundColor: "#FFF",
			}}
		>
			<CanvasHeader CV={CV} />
			<CanvasBody CV={CV} />
		</div>
	);
}

export default Canvas;
