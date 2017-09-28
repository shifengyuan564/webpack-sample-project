
module.exports = {
    entry: [
        "babel-polyfill",
        './src/index.js',
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js',
    },
    externals: {
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            options: {
                "presets": ["react", "es2015", "stage-1"]
            }
        }, {
            test: /\.css$/,     // 以css结尾的文件
            use: [
                {loader: "style-loader"},
                {loader: "css-loader", options: {sourceMap: true}},
                {loader: "postcss-loader"}
            ]
        }, {
            test: /\.(scss|sass)$/,
            use: [
                {loader: "style-loader"},
                {loader: "css-loader", options: {sourceMap: true}},
                {loader: "sass-loader", options: {sourceMap: true}}
            ]
        }]
    },
    node: {
        net: 'empty',
        fs: "empty",
        tls: 'empty'
    },
    devServer: {
        inline: true, /*浏览器自动更新*/
        contentBase: __dirname,
        port: 3000,
        historyApiFallback: true,
    },
    devtool: 'source-map'         //配置生成Source Maps，选择合适的选项
};
