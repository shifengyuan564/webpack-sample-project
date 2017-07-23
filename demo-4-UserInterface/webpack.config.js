module.exports = {

    entry:["babel-polyfill","./source/client.js"],
    output:{
      path:__dirname,
      filename:'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,

            }
        ]
    },
    devServer:{
        inline: true,   /*浏览器自动更新*/
        contentBase: './public',
        port:3000
    }
};