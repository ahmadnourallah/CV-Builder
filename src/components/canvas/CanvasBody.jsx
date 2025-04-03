import CanvasSection from "./CanvasSection";

function CanvasBody({ CV }) {
	return (
		<div
			className="canvasBody"
			style={{
				marginInline: "5vw",
				display: "flex",
				flexDirection: "column",
				gap: "var(--gap-lg)",
				marginBottom: "var(--gap-lg)",
				marginTop: "var(--gap-lg)",
			}}
		>
			<CanvasSection title="Education" items={CV.education} />
			<CanvasSection
				title="Professional Experience"
				items={CV.experience}
			/>
		</div>
	);
}

export default CanvasBody;
