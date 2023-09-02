const config = require('./webpack.config');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

config.mode = "production";
config.output = {
    path: path.resolve(__dirname, "../docs"),
    filename: "[name].[contenthash:10].js",
    chunkFilename: "[name].[contenthash:10].chunk.js",
    assetModuleFilename: "[hash:10][ext][query]",
    clean: true
};
config.optimization = {
    minimizer: [new TerserPlugin({
        extractComments: false
    })]
};
config.plugins.push(new CopyWebpackPlugin({
    patterns: [
        {
            from: path.resolve(__dirname, '../public'),
            to: path.resolve(__dirname, '../docs'),
            filter: function (filepath) {
                return !/index\.html/.test(filepath);
            }
        }

    ]
}));

module.exports = config;