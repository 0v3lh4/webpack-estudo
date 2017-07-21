var webStripLoader = require('strip-loader');
var configDevs = require('./webpack.config.js');

var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    loader: webStripLoader.loader('console.log')
};

configDevs.module.loaders.push(stripLoader);

module.exports = configDevs;