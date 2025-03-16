import CanvasSectionItem from "./CanvasSectionItem";

function CanvasSection({ customs, title, items }) {
	if (items.length !== 0) {
		return (
			<div className="canvasSection">
				<h2
					className="title"
					style={{
						padding: customs.GapSM,
						textAlign: "center",
						color: customs.CVAccentClr,
						backgroundColor: customs.GreyClr,
						marginBottom: customs.GapMD,
						borderRadius: "2px",
					}}
				>
					{title}
				</h2>
				<div
					className="body"
					style={{
						display: "flex",
						flexDirection: "column",
						gap: customs.GapLG,
					}}
				>
					{items.map((item) => {
						if (item.isVisible) {
							return (
								<CanvasSectionItem
									customs={customs}
									item={item}
								/>
							);
						}
					})}
				</div>
			</div>
		);
	}
}

export default CanvasSection;
