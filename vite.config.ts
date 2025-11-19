import react from "@vitejs/plugin-react";
import eslint from "@nabla/vite-plugin-eslint";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
        host: true,
    },
    base: "/",
    plugins: [
        react(),
        eslint(),
        svgr({
            // svgr options: https://react-svgr.com/docs/options/
            svgrOptions: {
                exportType: "default",
                ref: true,
                svgo: false,
                titleProp: true,
            },
            include: "**/*.svg",
        }),
    ],
    css: {
        modules: {
            localsConvention: "camelCaseOnly",
        },
        preprocessorOptions: {
            less: {
                math: "always",
                relativeUrls: true,
                javascriptEnabled: true,
            },
        },
    },
});
