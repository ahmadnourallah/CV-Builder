import { wrap } from "comlink";
import { saveAs } from "file-saver";
import { useState } from "react";
import ActionButton from "./ActionButton";
import Spinner from "./Spinner";
import Worker from "../workers/renderPDF.worker?worker";

function DownloadPDFCard({ customs, CV }) {
	const [isDownloading, setIsDownloading] = useState(false);
	const [fileName, setFileName] = useState("");

	async function savePDF(e) {
		e.preventDefault();
		setIsDownloading(true);
		const worker = wrap(new Worker());
		saveAs(await worker.renderPDF({ customs, CV }), `${fileName}.pdf`);
		setIsDownloading(false);
	}

	return (
		<form
			action="#"
			onSubmit={savePDF}
			className="downloadPDFCard card"
			style={{
				position: "relative",
				backgroundColor: "#FFF",
				display: "flex",
				gap: "var(--gap-md)",
			}}
		>
			{isDownloading && (
				<div
					class="overlay"
					style={{
						position: "absolute",
						display: "grid",
						placeContent: "center",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						borderRadius: "inherit",
						backgroundColor: "rgb(0, 0, 0, 0.2)",
						zIndex: 1000,
					}}
				>
					<Spinner size="35px" />
				</div>
			)}

			<label className="visually-hidden" htmlFor="filename">
				File name
			</label>
			<input
				required
				id="filename"
				value={fileName}
				onChange={(e) => setFileName(e.target.value)}
				placeholder="Download as ___.pdf"
				style={{
					flexGrow: 1,
				}}
			/>

			<ActionButton>Download</ActionButton>
		</form>
	);
}

export default DownloadPDFCard;
