import { expose } from "comlink";

if (
	typeof WorkerGlobalScope !== "undefined" &&
	self instanceof WorkerGlobalScope
) {
	self.global = self;
	self.window = self;
}

// import RefreshRuntime from '/@react-refresh';
if (import.meta.hot) {
	// RefreshRuntime.injectIntoGlobalHook(window);
	window.$RefreshReg$ = () => {};
	window.$RefreshSig$ = () => (type) => type;
	window.__vite_plugin_react_preamble_installed__ = true;
}

import { createElement } from "react";

const renderPDF = async ({ customs, CV }) => {
	try {
		const { pdf } = await import("@react-pdf/renderer");
		const { PDFDocument } = await import(
			"../components/PDFDocument/PDFDocument"
		);

		return await pdf(createElement(PDFDocument, { customs, CV })).toBlob();
	} catch (error) {
		console.log(error);
	}
};

expose({ renderPDF });
