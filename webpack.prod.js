"use strict"
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    devtool: "none",
    mode: "production",
    watch: false,
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            tsconfig: path.join(__dirname, "tsconfig.json"),
            workers: 2
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            openAnalyzer: false
        }),
    ],
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                parallel: true,
                uglifyOptions: {
                    ascii_only: true
                }
            }),
            new OptimizeCSSAssetsWebpackPlugin({})
        ]
    }
});
