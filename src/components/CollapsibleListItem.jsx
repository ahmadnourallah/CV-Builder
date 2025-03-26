import { mdiEyeOutline, mdiEyeOffOutline } from "@mdi/js";
import { handleEnter } from "../utils/keyboard";
import Icon from "@mdi/react";
import "../styles/collapsibleListItem.css";

function CollapsibleListItem({
	item,
	itemIndex,
	index,
	fieldKey,
	setMessage,
	setCV,
	switchNext,
}) {
	return (
		<li
			className="collapsibleItem"
			role="button"
			onKeyDown={handleEnter}
			onClick={() => {
				setMessage({ itemID: item.id, itemIndex });
				switchNext(index);
			}}
			tabIndex={0}
		>
			<span>{item.name}</span>

			<button
				className="visibleBtn"
				onClick={(e) => {
					e.stopPropagation();
					setCV((draft) => {
						const searchItem = draft[fieldKey].find(
							(currItem) => currItem.id === item.id
						);
						searchItem.isVisible = !searchItem.isVisible;
					});
				}}
			>
				{item.isVisible && <Icon path={mdiEyeOutline} size="30px" />}

				{!item.isVisible && (
					<Icon path={mdiEyeOffOutline} size="30px" />
				)}
			</button>
		</li>
	);
}

export default CollapsibleListItem;
