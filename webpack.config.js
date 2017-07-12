var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path'); // nodejs 自带的path工具，不需要npm install

module.exports = {
    entry: {
        bundle: __dirname + "/app/main.js"
    },
    output: {
        path: __dirname + "/dist",    //打包后的文件存放的地方, 生产环境使用publicPath: 'http://cdn.com/'
        filename: "js/[name].js"        //[name] 这里表示为entry中的bundle
    },
    module: {
        rules: [
            {
                test: /\.css$/,     // 以css结尾的文件
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader", options: {sourceMap: true}},
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            plugins: function () {
                                return [
                                    require('autoprefixer')({
                                        browsers: ['last 5 versions']
                                    })
                                ];
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'app'),
                options: {
                    presets: ["react", "env"]
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'template.html',
            title: "webpack is good",
            date: new Date()
        })
    ],
    devServer: {
        contentBase: __dirname,     // 如果设置成 __dirname + "/public"	:直接让localhost:7000指向/public中的index.html
        port: 7000
    },
    devtool: 'source-map'         //配置生成Source Maps，选择合适的选项
};