import CanvasHeader from "./CanvasHeader";
import CanvasBody from "./CanvasBody";

function Canvas({ CV }) {
	return (
		<div
			className="canvas shadow"
			style={{
				display: "flex",
				flexDirection: "var(--cv-layout)",
				maxWidth: "8.27in",
				minHeight: "11.67in",
				fontSize: "var(--cv-font-body)",
				backgroundColor: "#FFF",
			}}
		>
			<CanvasHeader CV={CV} />
			<CanvasBody CV={CV} />
		</div>
	);
}

export default Canvas;
