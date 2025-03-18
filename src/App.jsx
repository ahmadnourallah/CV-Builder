import { useState } from "react";
import Aside from "./components/Aside";
import Canvas from "./components/Canvas";
import customsData from "./config/customs.json";
import exampleData from "./config/example.json";

function App() {
	const [CV, setCV] = useState(exampleData);
	const [customs, setCustoms] = useState(customsData);

	return (
		<>
			<style>
				{`:root {
					--grey-clr: ${customs.GreyClr};
					--outline-clr: ${customs.OutlineClr};
					--cv-accent-clr: ${customs.CVAccentClr};
					--cv-font: ${customs.CVFont};
					--cv-font-bold: ${customs.CVFontBold};
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
				<Aside customs={customs} setCustoms={setCustoms} CV={CV} setCV={setCV} />

				<main>
					<Canvas CV={CV} />
				</main>
			</div>
		</>
	);
}

export default App;
