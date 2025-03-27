import InputGroup from "../common/InputGroup";
import CheckBoxInput from "../common/CheckBoxInput";
import ActionButton from "../common/ActionButton";
import SecondaryButton from "../common/SecondaryButton";
import { mdiDelete } from "@mdi/js";
import { useState, useRef, useEffect } from "react";

const deleteRecord = (prevCV, fieldKey, item) => {
	const index = prevCV[fieldKey].indexOf(item);
	prevCV[fieldKey].splice(index, 1);
};

const addRecord = (prevCV, id, fieldKey, key, value) => {
	prevCV[fieldKey].push({ id, [key]: value, isVisible: true });
};

const updateRecord = (prevCV, fieldKey, itemID, key, value) => {
	const item = prevCV[fieldKey].find((currItem) => currItem.id === itemID);
	item[key] = value;
};

function CollapsibleForm({
	fieldKey,
	CV,
	setCV,
	message: { itemID },
	setMessage,
	index,
	switchNext,
	showDescriptionField,
}) {
	const item = CV[fieldKey].find((currItem) => currItem.id === itemID);
	const [isEndPresent, setIsEndPresent] = useState(
		item && item.endDate === "present" ? true : false
	);
	const [prevCV] = useState({ ...CV });
	const formRef = useRef();

	useEffect(() => {
		formRef.current.scrollIntoView();
	}, []);

	const handleChange = (key, value) => {
		if (item) {
			setCV((prevCV) => {
				updateRecord(prevCV, fieldKey, itemID, key, value);
			});
		} else {
			const field = CV[fieldKey];

			const id =
				field[field.length - 1] === undefined
					? 0
					: field[field.length - 1].id + 1;

			setCV((prevCV) => {
				addRecord(prevCV, id, fieldKey, key, value);
			});

			setMessage({ itemID: id });
		}
	};

	return (
		<form
			ref={formRef}
			className="collapsibleForm"
			action="#"
			onSubmit={(e) => {
				e.preventDefault();
				switchNext(index);
			}}
		>
			<InputGroup key={0} label={"Company/Institution"} tip={"required"}>
				<input
					required
					type="text"
					value={item ? item.name : undefined}
					onChange={(e) => handleChange("name", e.target.value)}
				/>
			</InputGroup>

			<InputGroup key={1} label={"Field"} tip={"required"}>
				<input
					required
					type="text"
					value={item ? item.field : undefined}
					onChange={(e) => handleChange("field", e.target.value)}
				/>
			</InputGroup>

			<InputGroup key={2} label={"Start Date"} tip={"required"}>
				<input
					required
					type="month"
					value={item ? item.startDate : undefined}
					onChange={(e) => handleChange("startDate", e.target.value)}
				/>
			</InputGroup>

			<InputGroup key={3} label={"End Date"} tip={"optional"}>
				<input
					disabled={isEndPresent ? "disabled" : undefined}
					style={{ flex: 1 }}
					type="month"
					value={item && !isEndPresent ? item.endDate : ""}
					onChange={(e) => handleChange("endDate", e.target.value)}
				/>

				<CheckBoxInput
					checked={isEndPresent}
					label="Present"
					onChange={(isChecked) => {
						if (isChecked) {
							setIsEndPresent(true);
							handleChange("endDate", "present");
						} else {
							setIsEndPresent(false);
							handleChange("endDate", item?.endDate || "");
						}
					}}
				/>
			</InputGroup>

			{(item?.description !== undefined || showDescriptionField) && (
				<InputGroup key={4} label={"Descriptions"} tip={"optional"}>
					<textarea
						value={item !== null ? item?.description : ""}
						onChange={(e) =>
							handleChange("description", e.target.value)
						}
					></textarea>
				</InputGroup>
			)}

			<div
				className="controlBtns"
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginTop: "calc(var(--gap-md) * 2)",
				}}
			>
				{item && (
					<div className="left">
						<SecondaryButton
							iconPath={mdiDelete}
							onClick={() => {
								setCV((prevCV) =>
									deleteRecord(prevCV, fieldKey, item)
								);
								switchNext(index);
							}}
						>
							Delete
						</SecondaryButton>
					</div>
				)}

				<div
					className="right"
					style={{
						display: "flex",
						flex: "1",
						justifyContent: "end",
						gap: "var(--gap-md)",
					}}
				>
					<SecondaryButton
						onClick={() => {
							setCV({ ...prevCV });
							switchNext(index);
						}}
					>
						Cancel
					</SecondaryButton>
					<ActionButton>Save</ActionButton>
				</div>
			</div>
		</form>
	);
}

export default CollapsibleForm;
