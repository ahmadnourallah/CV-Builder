import { useState } from "react";
import { mdiInformationBox, mdiSchool, mdiBriefcaseVariant } from "@mdi/js";
import DownloadPDFCard from "./DownloadPDFCard";
import PersonalForm from "./PersonalForm";
import Collapsible from "./Collapsible";
import Switcher from "./Switcher";
import CollapsibleList from "./CollapsibleList";
import CollapsibleForm from "./CollapsibleForm";

function Aside({ customs, CV, setCV }) {
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
			>
				<PersonalForm CV={CV} setCV={setCV} />
			</Collapsible>

			<Collapsible
				index={1}
				icon={mdiSchool}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				title="Education"
			>
				<Switcher>
					<CollapsibleList
						CV={CV}
						setCV={setCV}
						fieldKey="education"
						buttonLabel="Education"
					/>
					<CollapsibleForm
						fieldKey="education"
						CV={CV}
						setCV={setCV}
					/>
				</Switcher>
			</Collapsible>

			<Collapsible
				index={2}
				icon={mdiBriefcaseVariant}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				title="Experience"
			>
				<Switcher>
					<CollapsibleList
						CV={CV}
						setCV={setCV}
						fieldKey="experience"
						buttonLabel="Experience"
					/>
					<CollapsibleForm
						fieldKey="experience"
						CV={CV}
						setCV={setCV}
						showDescriptionField={true}
					/>
				</Switcher>
			</Collapsible>
		</aside>
	);
}

export default Aside;
