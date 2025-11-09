import { defineConfig } from "vite";
import path from "path";
import type { CSSOptions } from "vite";
import type { BuildOptions } from "vite";

const cssOptions = {
	preprocessorOptions: {
		scss: {
			additionalData: `
        @use "src/styles/preprocessor/media.scss" as *;
        @use "src/styles/preprocessor/mixins.scss" as *;
      `,
		},
	},
} satisfies CSSOptions;

const buildOptions = {
	outDir: `${process.cwd()}/dist`,
	emptyOutDir: true,
} satisfies BuildOptions;

export default defineConfig({
	root: "src",
	publicDir: "public",
	cacheDir: path.resolve("node_modules/.vite"),
	css: cssOptions,
	build: buildOptions,
});
