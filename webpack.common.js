const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const sourceFolder = "src";
const outputFolder = "target";

module.exports = {

    context: path.join(__dirname, sourceFolder),
    entry: ["babel-polyfill", "./index.tsx", "./index.html"],
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, outputFolder)
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx", ".scss", ".json", ".css"],
        modules: [
            path.join(__dirname, sourceFolder),
            "node_modules"
        ]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { 
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader" 
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { 
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },

            // All files with a ".css" extension will be handled by "css-loader"
            { 
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                use: ExtractTextPlugin.extract({
                    use: [
                        "typings-for-css-modules-loader?modules&namedExport&camelCase&sass&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
                        "sass-loader"
                    ],
                    fallback: "style-loader?sourceMap"
                })

            },

            {
                test: /\.(ttf|woff|woff2|eot|svg)$/,
                loader: "file-loader?name=/fonts/[name].[ext]"
            },

            {
                test: /\.(jpg|jpeg|png|gif)$/,
                loader: "file-loader?name=/images/[name].[ext]"
            },

            {
                test: /\.(htm|html)$/,
                loader: "file-loader?name=[name].[ext]"
            },
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};