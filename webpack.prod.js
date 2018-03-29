"use strict"
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(common, {
    devtool: "source-map",

    plugins: [
        new ExtractTextPlugin("bundle.css"),
        new UglifyJSPlugin({
            uglifyOPtions: {
                output: {
                    ascii_only: true
                }
            }
        }),
        new webpack.DefinPlugin({'process.env.NODE_ENV': JSON.stringify('production')})
    ]
})