"use strict"
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const proxy = require("./proxy");
const WriteFileWebpackPlugin = require("write-file-webpack-plugin");
const outputFolder = "target";
module.exports = merge(common, {
    devtool: "eval-source-map",
    mode: "development",
    devServer: {
        contentBase: outputFolder,
        port: 8001,
        inline: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
        proxy: proxy
    },

    plugins: [
        new WriteFileWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})