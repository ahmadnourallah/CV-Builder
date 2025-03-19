import {
	Document,
	Page,
	View,
	Text,
	StyleSheet,
	Font,
	Svg,
	Path,
} from "@react-pdf/renderer";
import { mdiEmail, mdiPhone, mdiMapMarker } from "@mdi/js";

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

function Header({ customs, styles, CV }) {
	return (
		<View
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
			<Text className="name" style={styles.h1}>
				{CV.name}
			</Text>
			<View
				className="personal"
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					columnGap: customs.GapLG,
					rowGap: customs.GapMD,
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

function SectionItem({ customs, item }) {
	return (
		<View
			className="item"
			style={{
				display: "flex",
				flexDirection: "row",
			}}
		>
			<View className="leftCol" style={{ flex: 1 }}>
				<Text>
					{item.startDate} - {item.endDate}
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

function Section({ customs, styles, title, items }) {
	if (items.length !== 0) {
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

export const PDFDocument = ({ customs, CV }) => {
	Font.register({
		family: "NotoSans",
		src: "../assets/fonts/NotoSans-Regular.woff",
	});

	Font.register({
		family: "NotoSans-Bold",
		src: "../assets/fonts/NotoSans-Bold.woff",
	});

	const styles = StyleSheet.create({
		page: {
			margin: 0,
			fontFamily: "NotoSans",
			fontSize: customs.FontBody,
		},
		h1: {
			fontFamily: "NotoSans-Bold",
			fontSize: customs.FontLG,
		},
		h2: {
			fontFamily: "NotoSans-Bold",
			fontSize: customs.FontSM,
		},
	});

	return (
		<Document>
			<Page
				size="A4"
				style={{
					...styles.page,
					display: "flex",
					flexDirection: "column",
					gap: customs.GapLG,
				}}
			>
				<Header customs={customs} CV={CV} styles={styles} />
				<Body customs={customs} styles={styles} CV={CV} />
			</Page>
		</Document>
	);
};
