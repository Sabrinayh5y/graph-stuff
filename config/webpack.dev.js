const config = require('./webpack.config');

config.mode = "development";
config.devServer = {
    open: false,
    host: 'localhost',
    port: 8080,
    hot: true,
    compress: false,
    historyApiFallback: true,  // 解决react-router刷新404问题
};

config.devtool = "eval-cheap-module-source-map";//源码调试的模式

module.exports = config;