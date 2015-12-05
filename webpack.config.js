var path = require("path");
var webpack = require('webpack');

module.exports = {
    watch: true,
    output: {
        filename: "app.js"
    },
    devtool: 'source-map',
    resolveLoader: { root: path.join(__dirname, "node_modules") },
    module: {
      loaders: [
                {
                  test: /\.jsx?$/,
                  exclude: /(node_modules|bower_components)/,
                  loader: 'babel',
                  query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}