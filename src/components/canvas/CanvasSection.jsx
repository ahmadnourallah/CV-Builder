import CanvasSectionItem from "./CanvasSectionItem";

function CanvasSection({ title, items }) {
	const isAnyItemVisible = items.some((item) => item.isVisible);

	if (items.length !== 0 && isAnyItemVisible) {
		return (
			<div className="canvasSection">
				<h2
					className="title"
					style={{
						padding: "var(--gap-sm)",
						textAlign: "center",
						color: "var(--cv-accent-clr)",
						backgroundColor: "var(--grey-clr)",
						marginBottom: "var(--gap-md)",
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
						gap: "2rem",
					}}
				>
					{items.map((item, index) => {
						if (item.isVisible) {
							return (
								<CanvasSectionItem key={index} item={item} />
							);
						}
					})}
				</div>
			</div>
		);
	}
}

export default CanvasSection;
