var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var outputPath = path.resolve(__dirname, 'output');

module.exports = {
    entry: "./app/js/app.js",
    output: {
        path: outputPath,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    "babel",
                    "eslint-loader"
                ],
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    "style",
                    "css",
                    "sass"
                )
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'The Russian Peasant Calculator',
            hash: true
        }),
        new ExtractTextPlugin("[name].css")
    ]
};
