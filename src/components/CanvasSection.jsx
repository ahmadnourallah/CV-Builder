import CanvasSectionItem from "./CanvasSectionItem";

function CanvasSection({ title, items }) {
	if (items.length !== 0) {
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
						gap: "var(--gap-lg)",
					}}
				>
					{items.map((item) => {
						if (item.isVisible) {
							return <CanvasSectionItem item={item} />;
						}
					})}
				</div>
			</div>
		);
	}
}

export default CanvasSection;
