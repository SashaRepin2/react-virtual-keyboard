const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [path.resolve(__dirname, "..", "./src/index.tsx")],

    output: {
        path: path.resolve(__dirname, "..", "./build"),
        filename: "[name].[contenthash].js",
        sourceMapFilename: "[name].[contenthash].js.map",
        clean: true,
    },

    resolve: {
        extensions: [".js", ".ts", ".tsx"],
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "..", "./src/index.html"),
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                type: "asset/inline",
            },
            {
                test: /\.(png|ico|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
        ],
    },
};
