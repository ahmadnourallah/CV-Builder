import { useState } from "react";
import Switcher from "../common/Switcher";
import CollapsibleGroup from "./CollapsibleGroup";
import DownloadPDFCard from "./DownloadPDFCard";
import AsideSwitchPanel from "./AsideSwitchPanel";
import CustomizationGroup from "./CustomizationGroup";

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

			<div
				className="asideColumns"
				style={{
					display: "flex",
					gap: "calc(var(--gap-md) + var(--gap-sm))",
				}}
			>
				<AsideSwitchPanel
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
				/>

				<Switcher externalIndex={activeIndex}>
					<CollapsibleGroup CV={CV} setCV={setCV} />
					<CustomizationGroup
						customs={customs}
						setCustoms={setCustoms}
					/>
				</Switcher>
			</div>
		</aside>
	);
}

export default Aside;
