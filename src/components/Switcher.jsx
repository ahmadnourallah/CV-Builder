import { cloneElement, useState } from "react";

function Switcher({ children }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [message, setMessage] = useState(null);

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
		<div className="switcher">
			{children.map((child, index) => {
				if (activeIndex === index) {
					return (
						<div key={index} className="switcherItem">
							{cloneElement(child, {
								switchNext,
								switchBack,
								index,
								setActiveIndex,
								message,
								setMessage,
							})}
						</div>
					);
				}
			})}
		</div>
	);
}

export default Switcher;
