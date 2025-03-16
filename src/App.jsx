import { useState, useRef } from "react";
import Aside from "./components/Aside";
import Canvas from "./components/Canvas";

function App() {
	const [CV, setCV] = useState({
		name: "Josephine Meyers",
		email: "josephine.meyers@mail.co.uk",
		phone: "+44 3245 5521 5521",
		address: "London, UK",
		education: [
			{
				id: 0,
				isVisible: true,
				name: "Hidden University",
				field: "Master's Degree in Math",
				startDate: "08/2020",
				endDate: "present",
				location: "New York City, US",
			},
		],
		experience: [
			{
				id: 0,
				isVisible: true,
				name: "Umbrella Inc.",
				field: "UX & UI Designer",
				startDate: "08/2020",
				endDate: "present",
				location: "New York City, US",
				description:
					"Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
			},
			{
				id: 1,
				isVisible: true,
				name: "Black Mesa Labs",
				field: "UX Research Assistant",
				startDate: "04/2018",
				endDate: "02/2019",
				location: "Berlin, Germany",
				description:
					"Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
			},
		],
	});

	const [customs, setCustoms] = useState({
		greyClr: "#f3f4f6",
		outlineClr: "#3b83f6",
		CVAccentClr: "#0e374e",
		CVFont: '"NotoSans", sans-serif',
		CVFontBold: '"NotoSans-Bold", sans-serif',
		FontLG: "2rem",
		FontMD: "1.5rem",
		FontSM: "1.2rem",
		GapLG: "2rem",
		GapMD: "10px",
		GapSM: "5px",
	});

	const canvasRef = useRef();

	return (
		<>
			<style>
				{`:root {
					--grey-clr: ${customs.greyClr};
					--outline-clr: ${customs.outlineClr};
					--cv-accent-clr: ${customs.CVAccentClr};
					--cv-font: ${customs.CVFont};
					--cv-font-bold: ${customs.CVFontBold};
					--font-lg: ${customs.FontLG};
					--font-md: ${customs.FontMD};
					--font-sm: ${customs.FontSM};
					--gap-lg: ${customs.GapLG};
					--gap-md: ${customs.GapMD};
					--gap-sm: ${customs.GapSM};
				}`}
			</style>

			<div className="container">
				<Aside canvasRef={canvasRef} />

				<main>
					<Canvas canvasRef={canvasRef} CV={CV} />
				</main>
			</div>
		</>
	);
}

export default App;
