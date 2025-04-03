import Section from "./Section";
import { View } from "@react-pdf/renderer";

function Body({ customs, styles, CV }) {
	const isRow = customs.CVLayout !== "column";

	return (
		<View
			className="canvasBody"
			style={{
				margin: "0 36pt",
				width: isRow ? "100%" : undefined,
				display: "flex",
				flexDirection: "column",
				gap: customs.CVGapLG,
				marginTop: !isRow ? customs.CVGapLG : undefined,
			}}
		>
			<Section
				styles={styles}
				customs={customs}
				title="Education"
				items={CV.education}
			/>
			<Section
				styles={styles}
				customs={customs}
				title="Professional Experience"
				items={CV.experience}
			/>
		</View>
	);
}

export default Body;
