module.exports = {
    entry: {
        app: __dirname + "/src/app.jsx"
    },
    output: {
        path: __dirname + "/build",
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,     // 以css结尾的文件
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader", options: {sourceMap: true}}
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader", options: {sourceMap: true}},
                    {loader: "sass-loader", options: {sourceMap: true}}
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["react", "env", "stage-0"],
                        plugins: ['transform-runtime']
                    }
                }
            },
            {
                test: /\.(svg|ttf|woff|woff2|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {loader: 'url-loader', options: {limit: 8192}}
                ]
            }
        ]
    },


    devtool: 'source-map'
};