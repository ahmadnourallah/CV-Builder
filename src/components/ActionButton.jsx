function ActionButton({
	className = undefined,
	children,
	type = "submit",
	onClick = undefined,
}) {
	return (
		<button
			className={className}
			style={{
				backgroundColor: "#187ff5",
				padding: "calc(var(--gap-sm) * 1.5) var(--gap-lg)",
				color: "#fff",
				fontFamily: "NotoSans-Bold",
				fontSize: "14px",
				borderRadius: "5px",
			}}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default ActionButton;
