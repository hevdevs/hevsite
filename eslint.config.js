import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
	globalIgnores(["node_modules/*", "build/**/*"]),
	tseslint.configs.recommended,
	pluginJs.configs.recommended,
	{ languageOptions: { globals: globals.browser } },
]);
