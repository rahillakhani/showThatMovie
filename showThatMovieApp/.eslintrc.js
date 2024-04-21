module.exports = {
    root: true,
    env: {
        browser: true,
        es2022: true,
        es6: true,
        node: true,
        jest: true
    },
    extends: [
        "@react-native",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier"
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json"
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["warn", "double"],
        semi: ["error", "always"],
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-var-requires": "off",
        "no-prototype-builtins": "warn"
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    ignorePatterns: ["node_modules", "__tests__", "__mocks__", "webpack.config.js", "webpack.web.config.js"]
};
