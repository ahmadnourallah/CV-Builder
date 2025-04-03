import { mdiEmail, mdiPhone, mdiMapMarker } from "@mdi/js";
import CanvasHeaderItem from "./CanvasHeaderItem";

function CanvasHeader({ CV }) {
	return (
		<div
			className="header"
			style={{
				backgroundColor: "var(--cv-accent-clr)",
				color: "#fff",
				display: "flex",
				flexDirection: "column",
				gap: "var(--gap-md)",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
				padding: "var(--gap-lg)",
				wordBreak: "break-word",
				minWidth: "40%",
			}}
		>
			<h1 className="name" style={{ fontSize: "calc(20px + 1vw)" }}>
				{CV.name}
			</h1>
			<div
				className="personal"
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					columnGap: "var(--gap-lg)",
					rowGap: "var(--gap-md)",
				}}
			>
				{CV.email && (
					<CanvasHeaderItem icon={mdiEmail} text={CV.email} />
				)}

				{CV.phone && (
					<CanvasHeaderItem icon={mdiPhone} text={CV.phone} />
				)}

				{CV.address && (
					<CanvasHeaderItem icon={mdiMapMarker} text={CV.address} />
				)}
			</div>
		</div>
	);
}

export default CanvasHeader;
