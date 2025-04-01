import { View, Text } from "@react-pdf/renderer";

function SectionItem({ customs, item }) {
	return (
		<View
			className="item"
			style={{
				display: "flex",
				flexDirection: "row",
				gap: customs.GapSM,
			}}
		>
			<View className="leftCol" style={{ flex: 1 }}>
				<Text>
					{item.startDate &&
						item.startDate.split("-").reverse().join("/")}{" "}
					{item.startDate && item.endDate && "-"}{" "}
					{item.endDate &&
						item.endDate.split("-").reverse().join("/")}
				</Text>
				<Text>{item.location}</Text>
			</View>
			<View className="rightCol" style={{ flex: 3 }}>
				<Text className="name" style={{ fontFamily: "NotoSans-Bold" }}>
					{item.name}
				</Text>
				<Text className="field" style={{ marginBottom: customs.GapMD }}>
					{item.field}
				</Text>
				{item.description && (
					<Text className="description">{item.description}</Text>
				)}
			</View>
		</View>
	);
}

export default SectionItem;
