module.exports = {
    entry: ["./source/client.js"],
    output: {
        path: __dirname,
        filename: 'index.js',
    },

    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/,
        }]
    },
    devServer: {
        inline: true, /*浏览器自动更新*/
        contentBase: './public',
        port: 3000
    }
};