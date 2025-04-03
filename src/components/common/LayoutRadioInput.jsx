import "../../styles/layoutRadioInput.css";

function LayoutRadioInput({ value, onChange }) {
	return (
		<div className="layoutRadioInput" onChange={onChange}>
			<label key={0} htmlFor="layoutTop">
				<input
					type="radio"
					name="layout"
					id="layoutTop"
					value="column"
					defaultChecked={value === "column"}
				/>
				Top
			</label>

			<label key={1} htmlFor="layoutLeft">
				<input
					type="radio"
					name="layout"
					id="layoutLeft"
					value="row"
					defaultChecked={value === "row"}
				/>
				Left
			</label>

			<label key={2} htmlFor="layoutRight">
				<input
					type="radio"
					name="layout"
					id="layoutRight"
					value="row-reverse"
					defaultChecked={value === "row-reverse"}
				/>
				Right
			</label>
		</div>
	);
}

export default LayoutRadioInput;
