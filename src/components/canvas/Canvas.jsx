import CanvasHeader from "./CanvasHeader";
import CanvasBody from "./CanvasBody";

function Canvas({ CV, customs }) {
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
			<CanvasHeader CV={CV} customs={customs} />
			<CanvasBody CV={CV} customs={customs} />
		</div>
	);
}

export default Canvas;
