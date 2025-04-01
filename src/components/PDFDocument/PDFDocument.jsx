import NotoSansRegular from "../../assets/fonts/NotoSans-Regular.woff";
import NotoSansBold from "../../assets/fonts/NotoSans-Bold.woff";
import Header from "./Header";
import Body from "./Body";
import { Document, Page, StyleSheet, Font, View } from "@react-pdf/renderer";

export const PDFDocument = ({ customs, CV }) => {
	Font.register({
		family: "NotoSans",
		src: NotoSansRegular,
	});

	Font.register({
		family: "NotoSans-Bold",
		src: NotoSansBold,
	});

	const styles = StyleSheet.create({
		page: {
			margin: 0,
			paddingTop: customs.GapLG,
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
					flexDirection: customs.CVLayout,
				}}
			>
				<Header customs={customs} CV={CV} styles={styles} />
				<Body customs={customs} styles={styles} CV={CV} />
			</Page>
		</Document>
	);
};
