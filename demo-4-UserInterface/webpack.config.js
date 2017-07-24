const ExtractTextPlugin = require('extract-text-webpack-plugin');
const env = process.env.NODE_ENV;

module.exports = {

    entry: ["babel-polyfill", "./source/client.js"],
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },

    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/,

        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ['css-loader']
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin("app.css"),
    ],
    devServer: {
        inline: true, /*浏览器自动更新*/
        contentBase: './public',
        port: 3000
    }
};