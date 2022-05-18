const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:8080",       
        "./src/index.js",
    ],

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/",
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: "babel-loader" },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "src/index.html",
        }),
    ],
};
