import { useState } from "react";
import { useImmer } from "use-immer";
import Aside from "./components/aside/Aside";
import Canvas from "./components/canvas/Canvas";
import customsData from "./config/customs.json";
import exampleData from "./config/example.json";

function App() {
	const [CV, setCV] = useImmer(exampleData);
	const [customs, setCustoms] = useState(customsData);

	return (
		<>
			<style>
				{`:root {
					--cv-layout: ${customs.CVLayout};
					--cv-accent-clr: ${customs.CVAccentClr};
					--cv-font: ${customs.CVFont};
					--cv-font-bold: ${customs.CVFontBold};
					--cv-font-lg: ${customs.CVFontLG};
					--cv-font-md: ${customs.CVFontMD};
					--cv-font-sm: ${customs.CVFontSM};
					--cv-gap-lg: ${customs.CVGapLG};
					--cv-gap-md: ${customs.CVGapMD};
					--cv-gap-sm: ${customs.CVGapSM};
					--grey-clr: ${customs.GreyClr};
					--outline-clr: ${customs.OutlineClr};
					--font: ${customs.Font};
					--font-bold: ${customs.FontBold};
					--font-lg: ${customs.FontLG};
					--font-md: ${customs.FontMD};
					--font-sm: ${customs.FontSM};
					--font-body: ${customs.FontBody};
					--gap-lg: ${customs.GapLG};
					--gap-md: ${customs.GapMD};
					--gap-sm: ${customs.GapSM};
				}`}
			</style>

			<div className="container">
				<Aside
					customs={customs}
					setCustoms={setCustoms}
					CV={CV}
					setCV={setCV}
				/>

				<main>
					<Canvas CV={CV} customs={customs} />
				</main>
			</div>
		</>
	);
}

export default App;
