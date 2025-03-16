import Collapsible from "./Collapsible";
import { mdiInformationBox, mdiSchool, mdiBriefcaseVariant } from "@mdi/js";
import { useState } from "react";

function Aside() {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<aside
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "var(--gap-lg)",
			}}
		>
			<Collapsible
				title="Personal Details"
				icon={mdiInformationBox}
				index={0}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
			>
				<p>Test</p>
			</Collapsible>

			<Collapsible
				index={1}
				icon={mdiSchool}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				title="Education"
			>
				Test
			</Collapsible>

			<Collapsible
				index={2}
				icon={mdiBriefcaseVariant}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				title="Experience"
			>
				Test
			</Collapsible>
		</aside>
	);
}

export default Aside;
