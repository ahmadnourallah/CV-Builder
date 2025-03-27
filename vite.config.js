import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const reactPlugin = react();

// https://vite.dev/config/
export default defineConfig({
	plugins: [reactPlugin],
	worker: {
		plugins: () => [reactPlugin],
		format: "es",
	},
	base: "/CV-Builder/",
});
