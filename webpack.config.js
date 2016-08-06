var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'The Russian Peasant Calculator',
            hash: true
        })
    ]
};
