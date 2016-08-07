var webpack = require("webpack");
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var outputPath = path.resolve(__dirname, 'output');
var productionMode = process.env.NODE_ENV === 'production';

var config = {
    entry: "./app/js/app.js",
    devtool: 'source-map',
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
                    ["css", "sass"]
                )
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'The Russian Peasant Calculator',
            hash: true,
            template: "app/index.html"
        }),
        new ExtractTextPlugin("[name].css"),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ]
};

if (productionMode) {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: { warnings: false }
        })
    );
}

module.exports = config;
