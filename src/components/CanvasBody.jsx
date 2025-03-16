import CanvasSection from "./CanvasSection";

function CanvasBody({ customs, CV }) {
	return (
		<div
			className="canvasBody"
			style={{
				marginInline: "3rem",
				display: "flex",
				flexDirection: "column",
				gap: customs.GapLG,
			}}
		>
			<CanvasSection
				customs={customs}
				title="Education"
				items={CV.education}
			/>
			<CanvasSection
				customs={customs}
				title="Professional Experience"
				items={CV.experience}
			/>

			<style>
				{`
					@media (width <= 700px) {
						.canvasSection .body .item {
							grid-template-columns: 1fr !important;
							gap: ${customs.GapMD};
						}
					}					
				`}
			</style>
		</div>
	);
}

export default CanvasBody;
