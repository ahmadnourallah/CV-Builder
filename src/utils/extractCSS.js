// Credits: https://github.com/Swizec/component-css-extractor. Slightly Adapted.

function getClassNames(node) {
	return [
		node.className,
		...Array.from(node.children).map(getClassNames),
	].flat();
}

function extractCSS(node) {
	// Collect class names for a DOM subtree
	// Works for styled-components and CSS modules (anything based on CSS classes)
	const classNames = getClassNames(node)
		.filter((item) => typeof item === "string")
		.map((name) => name.split(" "))
		.flat()
		.map((name) => `.${name}`);

	// Gets embedded CSS for the entire page
	const cssStyles = Array.from(document.head.getElementsByTagName("style"))
		.map((style) => style.innerHTML)
		.join("");

	return cssStyles;
}

export default extractCSS;
