import { useState } from "react";
import { mdiInformationBox, mdiSchool, mdiBriefcaseVariant } from "@mdi/js";
import PersonalForm from "./PersonalForm";
import Collapsible from "./Collapsible";
import Switcher from "../common/Switcher";
import CollapsibleList from "./CollapsibleList";
import CollapsibleForm from "./CollapsibleForm";

function CollapsibleGroup({ CV, setCV }) {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div
			className="collapsibleGroup"
			style={{
				flex: 1,
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
		</div>
	);
}

export default CollapsibleGroup;
