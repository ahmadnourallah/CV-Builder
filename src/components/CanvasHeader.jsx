import Icon from "@mdi/react";
import { mdiEmail, mdiPhone, mdiMapMarker } from "@mdi/js";
import "../styles/canvasHeader.css";

function CanvasHeader({ CV }) {
	return (
		<div className="header">
			<h1 className="name">{CV.name}</h1>
			<div className="personal">
				{CV.email && (
					<div className="item">
						<Icon path={mdiEmail} size="20px" color="#FFF" />
						<span>{CV.email}</span>
					</div>
				)}

				{CV.phone && (
					<div className="item">
						<Icon path={mdiPhone} size="20px" color="#FFF" />
						<span>{CV.phone}</span>
					</div>
				)}

				{CV.address && (
					<div className="item">
						<Icon path={mdiMapMarker} size="20px" color="#FFF" />
						<span>{CV.address}</span>
					</div>
				)}
			</div>
		</div>
	);
}

export default CanvasHeader;
