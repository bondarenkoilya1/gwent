import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";

import tsParser from "@typescript-eslint/parser";

export default [
  {
    ignores: [
      "**/dist/*",
      "**/node_modules/*",
      "**/.vite/*",
      "**/public/*",
      "**/.idea/*",
      "**/.vscode/*",
      "tsconfig.json",
      "jsconfig.json",
      "**/*.min.js",
      "**/*.map.js",
      "**/*.test.js",
      "**/*.test.ts",
      "**/*.spec.ts",
      "**/.env*"
    ]
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        google: "readonly"
      }
    },
    plugins: {
      react: eslintPluginReact,
      prettier: eslintPluginPrettier,
      "simple-import-sort": eslintPluginSimpleImportSort
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "prettier/prettier": ["error", { endOfLine: "auto" }],
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react", "^\\w"], // React-related packages
            ["^@"], // Imports starting with @
            ["App"],
            ["./styled", "^styled(/.*|$)"],
            ["^themes(/.*|$)"],
            ["^layout(/.*|$)"],
            ["^pages(/.*|$)"],
            ["^config(/.*|$)"],
            ["^constants(/.*|$)"],
            ["^data(/.*|$)"],
            ["^components(/.*|$)"],
            ["^import\\s+type"],
            ["^types", "^types(/.*|$)"],
            ["^utils(/.*|$)"],
            ["^http(/.*|$)"],
            ["^services(/.*|$)"],
            ["^store(/.*|$)"],
            ["^\\u0000"], // Side-effect imports
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"], // Parent imports
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"], // Relative imports
            ["^.+\\.?(css)$"] // Style imports
          ]
        }
      ],
      "react/react-in-jsx-scope": "off"
    }
  },
  {
    files: ["*.ts"],
    rules: {
      "no-unused-vars": "off"
    }
  }
];
