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
                    {loader: "postcss-loader"}
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
            },
            {
                test: /\.less$/,
                use: [
                    {loader: "style-loader"}, // creates style nodes from JS strings
                    {loader: "css-loader", options: {sourceMap: true}},// translates CSS into CommonJS
                    {loader: "postcss-loader"},
                    {loader: "less-loader", options: {sourceMap: true}}// compiles Less to CSS
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|woff)$/,
                use:[
                    {
                        loader: 'file-loader', //会把css中url的图片和<img>引的图片，都做处理
                        options:{
                            name: 'img/[name]-[hash:5].[ext]'
                        }
                    },
                    {
                        loader:'image-webpack-loader',
                    }
                ]
            },
/*            {
                test: /\.(png|jpg|jpeg|gif|woff)$/,
                loader: 'url-loader',
                options:{
                    limit: 20000, // 20k，limit参数，代表如果小于大约4k则会自动帮你压缩成base64编码的图片,否则拷贝文件到生产目录
                    name: 'img/[name]-[hash:5].[ext]'
                }
            }*/
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
    }
    ,
    devtool: 'source-map'         //配置生成Source Maps，选择合适的选项
};


/*
css-loader 是处理css文件中的url()等
style-loader 将css插入到页面的style标签顺便告诉你
less-loader 是将less文件编译成css
sass-loader 是将sass文件编译成css
*/
