import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import { useRef } from "react";
import "../styles/collapsible.css";

function Collapsible({
	title,
	icon,
	index,
	activeIndex,
	setActiveIndex,
	children,
}) {
	const collapsibleRef = useRef();

	const collapse = () => {
		collapsibleRef.current.classList.toggle("active");
		if (index === activeIndex) setActiveIndex(null);
		else {
			setActiveIndex(index);
			// Wait until the scale animation is done before scrolling
			setTimeout(() => collapsibleRef.current.scrollIntoView(), 215);
		}
	};

	return (
		<div>
			<div
				className={`card collapsible shadow ${
					activeIndex === index ? "active" : ""
				}`}
				ref={collapsibleRef}
			>
				<div className="head">
					<div className="left">
						<Icon path={icon} size="30px" />
						<h2 className="title">{title}</h2>
					</div>
					<div className="right">
						<button className="collapseBtn" onClick={collapse}>
							<Icon
								path={mdiChevronDown}
								className="chevron"
								size="25px"
							/>
						</button>
					</div>
				</div>
			</div>

			<div
				className={`collapsibleBody ${
					activeIndex === index ? "active" : ""
				}`}
			>
				{children}
			</div>
		</div>
	);
}

export default Collapsible;
