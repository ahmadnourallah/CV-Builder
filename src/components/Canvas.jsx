import CanvasHeader from "./CanvasHeader";
import CanvasBody from "./CanvasBody";

function Canvas({ CV }) {
	return (
		<div
			className="canvas"
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "var(--gap-lg)",
			}}
		>
			<CanvasHeader CV={CV} />
			<CanvasBody CV={CV} />
		</div>
	);
}

export default Canvas;
