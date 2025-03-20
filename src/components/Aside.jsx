import Collapsible from "./Collapsible";
import { mdiInformationBox, mdiSchool, mdiBriefcaseVariant } from "@mdi/js";
import { useState } from "react";
import DownloadPDFCard from "./DownloadPDFCard";

function Aside({ customs, setCustoms, CV, setCV }) {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<aside
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "var(--gap-lg)",
			}}
		>
			<DownloadPDFCard customs={customs} CV={CV} />

			<Collapsible
				title="Personal Details"
				icon={mdiInformationBox}
				index={0}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
			></Collapsible>

			<Collapsible
				index={1}
				icon={mdiSchool}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				title="Education"
			></Collapsible>

			<Collapsible
				index={2}
				icon={mdiBriefcaseVariant}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				title="Experience"
			></Collapsible>
		</aside>
	);
}

export default Aside;
