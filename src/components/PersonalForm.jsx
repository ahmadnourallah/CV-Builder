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
					onChange={(e) => setCV({ ...CV, name: e.target.value })}
				/>
			</InputGroup>

			<InputGroup label={"Email"}>
				<input
					type="email"
					value={CV.email}
					onChange={(e) => setCV({ ...CV, email: e.target.value })}
				/>
			</InputGroup>

			<InputGroup label={"Phone Number"}>
				<input
					type="tel"
					value={CV.phone}
					onChange={(e) => setCV({ ...CV, phone: e.target.value })}
				/>
			</InputGroup>

			<InputGroup label={"Address"}>
				<input
					type="text"
					value={CV.address}
					onChange={(e) => setCV({ ...CV, address: e.target.value })}
				/>
			</InputGroup>
		</form>
	);
}

export default PersonalForm;
