module.exports = {
    presets: ["module:@react-native/babel-preset"],
    plugins: ["@babel/plugin-transform-export-namespace-from",
        [
            "module:react-native-dotenv",
            {
                envName: "APP_ENV",
                path: "../.env",
                blocklist: null,
                allowlist: null,
                safe: true,
                allowUndefined: false,
                verbose: true
            }
        ]
    ]
};
