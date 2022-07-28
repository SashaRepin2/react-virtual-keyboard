const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",

    devServer: {
        hot: true,
        open: true,
    },
    plugins: [new ErrorOverlayPlugin(), new ReactRefreshWebpackPlugin()],
};
