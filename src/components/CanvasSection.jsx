import "../styles/canvasSection.css";

function CanvasSection({ title, items }) {
	if (items.length !== 0) {
		return (
			<div className="canvasSection">
				<h2 className="title">{title}</h2>
				<div className="body">
					{items.map((item) => {
						if (item.isVisible) {
							return (
								<div className="item">
									<div className="leftCol">
										{item.startDate} - {item.endDate}
										<br />
										{item.location}
									</div>
									<div className="rightCol">
										<h3 className="name">{item.name}</h3>
										<p className="field">{item.field}</p>
										{item.description && (
											<p className="description">
												{item.description}
											</p>
										)}
									</div>
								</div>
							);
						}
					})}
				</div>
			</div>
		);
	}
}

export default CanvasSection;
