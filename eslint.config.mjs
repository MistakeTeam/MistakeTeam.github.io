import { defineConfig, globalIgnores } from "eslint/config";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default defineConfig([
    globalIgnores(["**/dist", "**/.eslintrc.json"]),
    {
        extends: fixupConfigRules(compat.extends("airbnb", "eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended", "plugin:react-hooks/recommended", "prettier")),
        plugins: {
            "@typescript-eslint": fixupPluginRules(typescriptEslint),
            react: fixupPluginRules(react),
            "react-refresh": reactRefresh,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jest,
                ...globals.cache,
            },

            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",

            parserOptions: {
                project: ["./tsconfig.json"],
            },
        },
        rules: {
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/no-empty-object-type": "off",
            camelcase: "off",
            "class-methods-use-this": "off",
            "import/extensions": "off",
            "import/no-unresolved": "off",
            //"import/prefer-default-export": "off",
            "jsx-a11y/click-events-have-key-events": "off",
            //"jsx-a11y/label-has-associated-control": "off",
            "jsx-a11y/no-static-element-interactions": "off",
            //"linebreak-style": "off",
            "no-continue": "off",
            "no-plusplus": "off",
            //"no-shadow": "warn",
            "no-unused-vars": "off",
            "no-param-reassign": "off",
            //"no-empty-pattern": "off",
            "no-use-before-define": "off",
            "no-restricted-globals": "off",
            //"no-unsafe-optional-chaining": "off",
            "prefer-const": "off",
            //"react/prop-types": "off",
            "react/no-unused-prop-types": "off",
            "react/no-this-in-sfc": "off",
            "react/self-closing-comp": "off",
            "react/react-in-jsx-scope": "off",
            "react/jsx-filename-extension": [2, { extensions: [".ts", ".tsx"] }],
            "react/prefer-stateless-function": "off",
            //"react/require-default-props": "off",
            //"react/jsx-props-no-spreading": "off",
            "react/destructuring-assignment": "off",
            //"react/jsx-one-expression-per-line": "off",
            "react-hooks/purity": "off", // remover no futuro
            "react-hooks/set-state-in-effect": "off",
            //"react-refresh/only-export-components": [
            //    "warn",
            //    {
            //        allowConstantExport: true,
            //    },
            //],
        },
    },
]);
