import Header from "./Header";
import Body from "./Body";
import { Document, Page, StyleSheet, Font } from "@react-pdf/renderer";

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
			paddingTop: customs.GapLG,
			paddingBottom: customs.GapLG,
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
