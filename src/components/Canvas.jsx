import CanvasHeader from "./CanvasHeader";
import CanvasBody from "./CanvasBody";

function Canvas({ customs, CV, canvasRef }) {
	return (
		<div
			ref={canvasRef}
			className="canvas shadow"
			style={{
				display: "flex",
				flexDirection: "column",
				gap: customs.GapLG,
				maxWidth: "8.27in",
				minHeight: "11.67in",
				backgroundColor: "#FFF",
			}}
		>
			<CanvasHeader customs={customs} CV={CV} />
			<CanvasBody customs={customs} CV={CV} />
		</div>
	);
}

export default Canvas;
