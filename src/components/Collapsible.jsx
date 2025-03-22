import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import { useEffect, useRef, useState } from "react";
import { handleEnter } from "../utils/keyboard";
import "../styles/collapsible.css";

function Collapsible({
	title,
	icon,
	index,
	activeIndex,
	setActiveIndex,
	children,
}) {
	const isActive = activeIndex === index;
	const [maxHeight, setMaxHeight] = useState(0);
	const collapsibleRef = useRef();
	const collapsibleBodyRef = useRef();

	const getHeight = (element) => {
		return (
			Array.from(element.children).reduce(
				(height, child) => height + child.scrollHeight,
				0
			) + element.scrollHeight
		);
	};

	useEffect(() => {
		if (isActive) setMaxHeight(getHeight(collapsibleBodyRef.current));
		else setMaxHeight(0);
	}, [isActive]);

	const collapse = () => {
		if (isActive) {
			setActiveIndex(null);
			setMaxHeight(0);
		} else {
			setActiveIndex(index);
			setMaxHeight(getHeight(collapsibleBodyRef.current));

			// Wait until the scale animation ends before scrolling
			setTimeout(() => {
				collapsibleRef.current.scrollIntoView();
			}, 220);
		}
	};

	return (
		<div
			className={`card collapsible ${isActive ? "active" : ""}`}
			ref={collapsibleRef}
		>
			<div
				onClick={collapse}
				tabIndex="0"
				onKeyDown={handleEnter}
				className="collapsibleHead focusOutline"
			>
				<div className="left">
					<Icon path={icon} size="30px" />
					<h2 className="title">{title}</h2>
				</div>
				<div className="right">
					<Icon
						path={mdiChevronDown}
						className="chevron"
						size="25px"
					/>
				</div>
			</div>
			<div
				ref={collapsibleBodyRef}
				// Calculate a max height bigger than can ever be needed.
				// This fixes overflow when a switcher is used to display a component with
				// a larger height.
				style={{ maxHeight: `calc(${maxHeight}px * pow(10,10))` }}
				className="collapsibleBody"
			>
				{children}
			</div>
		</div>
	);
}

export default Collapsible;
