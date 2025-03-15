import { useState } from "react";
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

	return <Canvas CV={CV} />;
}

export default App;
