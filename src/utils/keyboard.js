function handleEnter(e) {
	if (e.keyCode === 13 || e.keyCode === 32) {
		e.preventDefault();
		e.target.dispatchEvent(
			new PointerEvent("click", { bubbles: true, cancelable: true })
		);
	}
}

export { handleEnter };
