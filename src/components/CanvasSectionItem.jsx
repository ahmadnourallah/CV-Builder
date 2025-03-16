function CanvasSectionItem({ item }) {
	return (
		<div
			className="item"
			style={{
				display: "grid",
				gridTemplateColumns: "1fr 3fr",
			}}
		>
			<div className="leftCol">
				{item.startDate} - {item.endDate}
				<br />
				{item.location}
			</div>
			<div className="rightCol">
				<h3 className="name" style={{ fontSize: "1rem" }}>
					{item.name}
				</h3>
				<p className="field" style={{ marginBottom: "var(--gap-md)" }}>
					{item.field}
				</p>
				{item.description && (
					<p className="description">{item.description}</p>
				)}
			</div>
		</div>
	);
}

export default CanvasSectionItem;
