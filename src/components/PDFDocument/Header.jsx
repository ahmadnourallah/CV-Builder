import HeaderItem from "./HeaderItem";
import { View, Text } from "@react-pdf/renderer";
import { mdiEmail, mdiPhone, mdiMapMarker } from "@mdi/js";

function Header({ customs, styles, CV }) {
	const isRow = customs.CVLayout !== "column";

	return (
		<View
			className="header"
			style={{
				backgroundColor: customs.CVAccentClr,
				color: "#fff",
				display: "flex",
				flexDirection: "column",
				gap: customs.CVGapMD,
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
				width: isRow ? "445pt" : undefined,
				height: isRow ? "100vh" : undefined,
				padding: customs.CVGapLG,
				marginTop: `-${customs.CVGapLG}`,
			}}
		>
			<Text className="name" style={styles.h1}>
				{CV.name}
			</Text>
			<View
				className="personal"
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "center",
					columnGap: customs.CVGapLG,
					rowGap: customs.CVGapMD,
				}}
			>
				{CV.email && (
					<HeaderItem
						customs={customs}
						iconPath={mdiEmail}
						text={CV.email}
					/>
				)}

				{CV.phone && (
					<HeaderItem
						customs={customs}
						iconPath={mdiPhone}
						text={CV.phone}
					/>
				)}

				{CV.address && (
					<HeaderItem
						customs={customs}
						iconPath={mdiMapMarker}
						text={CV.address}
					/>
				)}
			</View>
		</View>
	);
}

export default Header;
