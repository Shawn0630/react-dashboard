"use strict"
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const outputFolder = "target";
module.exports = merge(common, {
    devtool: "inline-source-map",

    devServer: {
        contentBase: outputFolder,
        port: 8001,
        inline: true,
        hot: true,
        historyApiFallback: true
    },

    plugins: [
        new ExtractTextPlugin("bundle.css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')})
    ]
})