import InputGroup from "./InputGroup";

function PersonalForm({ CV, setCV }) {
	return (
		<form
			className="personalForm"
			action="#"
			onSubmit={(e) => e.preventDefault()}
		>
			<InputGroup label={"Full Name"}>
				<input
					type="text"
					value={CV.name}
					onChange={(e) =>
						setCV((draft) => {
							draft.name = e.target.value;
						})
					}
				/>
			</InputGroup>

			<InputGroup label={"Email"}>
				<input
					type="email"
					value={CV.email}
					onChange={(e) =>
						setCV((draft) => {
							draft.email = e.target.value;
						})
					}
				/>
			</InputGroup>

			<InputGroup label={"Phone Number"}>
				<input
					type="tel"
					value={CV.phone}
					onChange={(e) =>
						setCV((draft) => {
							draft.phone = e.target.value;
						})
					}
				/>
			</InputGroup>

			<InputGroup label={"Address"}>
				<input
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
