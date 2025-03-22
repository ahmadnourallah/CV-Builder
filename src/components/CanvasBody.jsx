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
				marginBottom: "var(--gap-lg)",
			}}
		>
			<CanvasSection title="Education" items={CV.education} />
			<CanvasSection
				title="Professional Experience"
				items={CV.experience}
			/>

			<style>
				{`
					@media (width <= 700px) {
						.canvasSection .body .item {
							grid-template-columns: 1fr !important;
							gap: var(--gap-md);
						}
					}					
				`}
			</style>
		</div>
	);
}

export default CanvasBody;
