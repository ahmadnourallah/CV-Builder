import Section from "./Section";
import { View } from "@react-pdf/renderer";

function Body({ customs, styles, CV }) {
	return (
		<View
			className="canvasBody"
			style={{
				margin: "0 36pt",
				display: "flex",
				flexDirection: "column",
				gap: customs.GapLG,
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
