import { mdiEmail, mdiPhone, mdiMapMarker } from "@mdi/js";
import CanvasHeaderItem from "./CanvasHeaderItem";

function CanvasHeader({ customs, CV }) {
	return (
		<div
			className="header"
			style={{
				backgroundColor: customs.CVAccentClr,
				color: "#fff",
				display: "flex",
				flexDirection: "column",
				gap: customs.GapMD,
				justifyContent: "center",
				alignItems: "center",
				padding: customs.GapLG,
			}}
		>
			<h1 className="name">{CV.name}</h1>
			<div
				className="personal"
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					columnGap: customs.GapLG,
					rowGap: customs.GapMD,
				}}
			>
				{CV.email && (
					<CanvasHeaderItem
						customs={customs}
						icon={mdiEmail}
						text={CV.email}
					/>
				)}

				{CV.phone && (
					<CanvasHeaderItem
						customs={customs}
						icon={mdiPhone}
						text={CV.phone}
					/>
				)}

				{CV.address && (
					<CanvasHeaderItem
						customs={customs}
						icon={mdiMapMarker}
						text={CV.address}
					/>
				)}
			</div>
		</div>
	);
}

export default CanvasHeader;
