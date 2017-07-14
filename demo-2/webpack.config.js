var path = require('path');
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, "src"),
    entry: './js/client.js',
    output: {
        path: __dirname + "/src/",
        filename: "client.min.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /(node_modules|bower_components)/,
                options: {
                    presets: ["react", "env"],
                    plugins: [
                        'react-html-attrs',
                        'transform-decorators-legacy',
                        'transform-class-properties'
                    ]
                }
            }
        ]
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
    ],

    devtool: debug ? 'source-map' : null         //配置生成Source Maps，选择合适的选项
}
;