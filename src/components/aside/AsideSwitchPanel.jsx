import Icon from "@mdi/react";
import { mdiFileDocumentOutline, mdiPencilRuler } from "@mdi/js";
import "../../styles/asideSwitchPanel.css";

function AsideSwitchPanel({ activeIndex, setActiveIndex }) {
	return (
		<div className="wrapper">
			<div className="asideSwitchPanel card">
				<button
					className="contentBtn"
					data-active={activeIndex === 0 ? true : undefined}
					onClick={() => setActiveIndex(0)}
				>
					<Icon path={mdiFileDocumentOutline} size="20px" />
					Content
				</button>

				<button
					className="customizeBtn"
					data-active={activeIndex === 1 ? true : undefined}
					onClick={() => setActiveIndex(1)}
				>
					<Icon path={mdiPencilRuler} size="20px" />
					Customize
				</button>
			</div>
		</div>
	);
}

export default AsideSwitchPanel;
