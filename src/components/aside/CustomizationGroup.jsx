import LayoutRadioInput from "../common/LayoutRadioInput";
import ColorInput from "../common/ColorInput";

function CustomizationGroup({ customs, setCustoms }) {
	return (
		<div
			className="customizationGroup"
			style={{
				flex: 1,
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
			}}
		>
			<div
				className="colorCustomization card"
				style={{
					backgroundColor: "#FFF",
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
				}}
			>
				<h1>Layout</h1>
				<LayoutRadioInput
					value={customs.CVLayout}
					onChange={(e) =>
						setCustoms({ ...customs, CVLayout: e.target.value })
					}
				/>
			</div>

			<div
				className="colorCustomization card"
				style={{
					backgroundColor: "#FFF",
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
				}}
			>
				<h1>Color</h1>
				<ColorInput
					label="Accent color"
					value={customs.CVAccentClr}
					onChange={(e) =>
						setCustoms({
							...customs,
							CVAccentClr: e.target.value,
						})
					}
				/>
			</div>
		</div>
	);
}

export default CustomizationGroup;
