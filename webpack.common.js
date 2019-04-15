const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const scssPreprocessor = require('./scss-preprocessor');
const sourceFolder = "src";
const outputFolder = "target";
const projectName = "react-dashboard";


function srcPath(subdir) {
    return path.join(__dirname, sourceFolder, subdir);
}

module.exports = {
    context: path.join(__dirname, sourceFolder),
    entry: ["babel-polyfill", path.join(__dirname, sourceFolder, "./index.tsx")],
    output: {
        path: path.join(__dirname, outputFolder),
        filename: "[name].[hash].js",
        chunkFilename: "[id].[hash].js",
        publicPath: process.env.NODE_ENV !== 'production' ? "/" : path.join("/", projectName, "/")
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx", ".scss", ".json", ".css"],
        modules: [
            path.join(__dirname, sourceFolder),
            "node_modules"
        ],
        alias: {
            "~models": srcPath("models"),
            "~dva": srcPath("dva"),
            "~styles": srcPath("styles"),
            "~components": srcPath("components"),
            "~utilities": srcPath("utilities"),
            "~": srcPath("")
        }
    },
    stats: "minimal",
    plugins: [
        {
            apply: (compiler) => {
                compiler.hooks.afterEnvironment.tap("ScssTsPlugin", () => {
                    scssPreprocessor.preprocess();
                })
            }
        },
        new HtmlWebpackPlugin({
            template: path.join(__dirname, sourceFolder, "template.html"),
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css"
        }),
        new CleanWebpackPlugin(path.join(__dirname, outputFolder)),
        new CaseSensitivePathsPlugin(),
        new webpack.WatchIgnorePlugin([
            /scss\.d\.ts$/,
            /css\/.d\.ts$/
        ]),
    ],
    module: {
        rules: [
            { 
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                    experimentalWatchApi: true
                }
            },
            {
                test: /global\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /bootstrap\.min\.css$/,
                use: "file-loader?name=styles/[name].[ext]"
            },
            { 
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: process.env.NODE_ENV !== 'production' ? "style-loader" : MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader?modules&namedExport&importLoaders-1&localIdentName=[name]__[local]__[hash:base64:5]"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(ttf|woff|woff2|eot|svg)$/,
                use: "file-loader?name=fonts/[name].[ext]"
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: "file-loader?name=images/[name].[ext]"
            },
        ]
    }
};