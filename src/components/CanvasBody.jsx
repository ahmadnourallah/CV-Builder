import CanvasSection from "./CanvasSection";

function CanvasBody({ CV }) {
	return (
		<div
			className="canvasBody"
			style={{
				marginInline: "3rem",
				display: "flex",
				flexDirection: "column",
				gap: "var(--gap-lg)",
			}}
		>
			<CanvasSection title="Education" items={CV.education} />
			<CanvasSection title="Experience" items={CV.experience} />
		</div>
	);
}

export default CanvasBody;
