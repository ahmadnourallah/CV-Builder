import InputGroup from "./InputGroup";

function PersonalForm({ CV, setCV }) {
	return (
		<form
			className="personalForm"
			action="#"
			onSubmit={(e) => e.preventDefault()}
		>
			<InputGroup label={"Full Name"} tip={"required"}>
				<input
					required
					type="text"
					value={CV.name}
					onChange={(e) =>
						setCV((draft) => {
							draft.name = e.target.value;
						})
					}
				/>
			</InputGroup>

			<InputGroup label={"Email"} tip={"required"}>
				<input
					required
					type="email"
					value={CV.email}
					onChange={(e) =>
						setCV((draft) => {
							draft.email = e.target.value;
						})
					}
				/>
			</InputGroup>

			<InputGroup label={"Phone Number"} tip={"required"}>
				<input
					required
					type="tel"
					value={CV.phone}
					onChange={(e) =>
						setCV((draft) => {
							draft.phone = e.target.value;
						})
					}
				/>
			</InputGroup>

			<InputGroup label={"Address"} tip={"required"}>
				<input
					required
					type="text"
					value={CV.address}
					onChange={(e) =>
						setCV((draft) => {
							draft.address = e.target.value;
						})
					}
				/>
			</InputGroup>
		</form>
	);
}

export default PersonalForm;
