import "../styles/spinner.css";

function Spinner({ size }) {
	return (
		<div style={{ "--size": size }} className="spinner">
			<span className="message">LOADING</span>
		</div>
	);
}

export default Spinner;
