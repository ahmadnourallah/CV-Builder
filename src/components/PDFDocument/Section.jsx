import SectionItem from "./SectionItem";
import { View, Text } from "@react-pdf/renderer";

function Section({ customs, styles, title, items }) {
	const isAnyItemVisible = items.some((item) => item.isVisible);

	if (items.length !== 0 && isAnyItemVisible) {
		return (
			<View className="canvasSection">
				<Text
					className="title"
					style={{
						...styles.h2,
						padding: customs.GapSM,
						textAlign: "center",
						color: customs.CVAccentClr,
						backgroundColor: customs.GreyClr,
						marginBottom: customs.GapMD,
						borderRadius: "2px",
					}}
				>
					{title}
				</Text>
				<View
					className="body"
					style={{
						display: "flex",
						flexDirection: "column",
						gap: customs.GapLG,
					}}
				>
					{items.map((item) => {
						if (item.isVisible) {
							return (
								<SectionItem customs={customs} item={item} />
							);
						}
					})}
				</View>
			</View>
		);
	}
}

export default Section;
