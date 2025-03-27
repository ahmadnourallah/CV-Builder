import { View, Text, Svg, Path } from "@react-pdf/renderer";

function HeaderItem({ customs, iconPath, text }) {
	return (
		<View
			className="item"
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				gap: customs.GapSM,
			}}
		>
			<Svg
				viewBox="0 0 24 24"
				role="presentation"
				style={{ width: "15pt", height: "15pt" }}
			>
				<Path d={iconPath} style={{ fill: "#FFF" }}></Path>
			</Svg>
			<Text>{text}</Text>
		</View>
	);
}

export default HeaderItem;
