import CollapsibleListItem from "./CollapsibleListItem";
import AddButton from "../common/AddButton";
import { mdiPlus } from "@mdi/js";
import "../../styles/collapsibleList.css";

function CollapsibleList({
	fieldKey,
	CV,
	setCV,
	buttonLabel,
	switchNext,
	index,
	setMessage,
}) {
	return (
		<div className="collapsibleList">
			{CV[fieldKey].length > 0 && (
				<ul>
					{CV[fieldKey].map((item, itemIndex) => (
						<CollapsibleListItem
							key={itemIndex}
							item={item}
							index={index}
							fieldKey={fieldKey}
							setMessage={setMessage}
							setCV={setCV}
							switchNext={switchNext}
						/>
					))}
				</ul>
			)}

			<div className="addBtnWrapper">
				<AddButton
					className="addBtn"
					onClick={() => {
						setMessage({ itemID: null });
						switchNext(index);
					}}
					iconPath={mdiPlus}
				>
					{buttonLabel}
				</AddButton>
			</div>
		</div>
	);
}

export default CollapsibleList;
