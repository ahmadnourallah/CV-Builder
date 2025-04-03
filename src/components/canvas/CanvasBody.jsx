import CanvasSection from "./CanvasSection";

function CanvasBody({ CV, customs }) {
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
				width: customs.CVLayout !== "column" ? "60%" : undefined,
				wordBreak: "break-word",
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
