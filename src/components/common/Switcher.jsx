import { useEffect } from "react";
import { cloneElement, useState } from "react";

function Switcher({ children, externalIndex }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [message, setMessage] = useState(null);

	useEffect(() => {
		if (externalIndex !== undefined) setActiveIndex(externalIndex);
	}, [externalIndex]);

	const switchNext = (currentIndex) => {
		const nextIndex =
			currentIndex + 1 > children.length - 1 ? 0 : currentIndex + 1;
		setActiveIndex(nextIndex);
	};

	const switchBack = (currentIndex) => {
		const prevIndex =
			currentIndex - 1 < 0 ? children.length - 1 : currentIndex - 1;
		setActiveIndex(prevIndex);
	};

	return (
		<>
			{children.map((child, index) => {
				if (activeIndex === index) {
					return (
						<>
							{cloneElement(child, {
								switchNext,
								switchBack,
								index,
								setActiveIndex,
								message,
								setMessage,
							})}
						</>
					);
				}
			})}
		</>
	);
}

export default Switcher;
