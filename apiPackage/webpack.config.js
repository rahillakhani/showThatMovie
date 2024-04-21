// // webpack.config.js
// const webpack = require("webpack");
// const path = require("path");
//
// module.exports = {
//     entry: "./index.ts",
//     devtool: 'inline-source-map',
//     mode: "production",
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 loader: "ts-loader",
//                 exclude: /node_modules/,
//                 options: {
//                     transpileOnly: false,
//                 }
//             }
//         ]
//     },
//     resolve: {
//         extensions: [".tsx", ".ts", ".js"],
//         fallback: { "path": false }
//
//     },
//     output: {
//         filename: "index.ts",
//         path: path.resolve(__dirname, "lib"),
//         libraryTarget: "umd"
//     },
//     plugins: [
//         new webpack.DefinePlugin({
//             __DEV__: JSON.stringify(true)
//         })
//     ]
// };

// my-awesome-package/webpack.config.js

const path = require('path');

const PACKAGE_NAME = 'fetchData';

const config = {
    context: __dirname,
    entry: {
        app: './src/index.ts',
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'lib'),
        libraryTarget: "commonjs",
        library: PACKAGE_NAME,
        umdNamedDefine: true,
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        contentBase: path.join(__dirname, 'lib'),
    },
    mode: "development",
    devtool: 'inline-source-map',
};

module.exports = (env, argv) => {
    return config;
};
