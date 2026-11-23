import { fileURLToPath } from "node:url";

import { defineConfig, lazyPlugins } from "vite-plus";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	lint: {
		plugins: ["oxc", "typescript", "unicorn", "react"],
		env: {
			browser: true,
		},
		ignorePatterns: ["dist"],
		options: {
			typeAware: true,
			typeCheck: true,
		},
		jsPlugins: [
			{
				name: "vite-plus",
				specifier: "vite-plus/oxlint-plugin",
			},
		],
		rules: {
			"vite-plus/prefer-vite-plus-imports": "error",
			"react/rules-of-hooks": "error",
			"react/exhaustive-deps": "warn",
			"react/only-export-components": ["error", { allowConstantExport: true }],
		},
	},
	fmt: {
		printWidth: 120,
		tabWidth: 4,
		useTabs: true,
		semi: true,
		singleQuote: false,
		trailingComma: "es5",
		bracketSpacing: true,
		sortPackageJson: false,
		sortTailwindcss: {
			stylesheet: "./src/index.css",
		},
		ignorePatterns: ["public/**", "src/assets/**"],
	},
	plugins: lazyPlugins(() => [react(), tailwindcss()]),
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
