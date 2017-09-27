module.exports = {
    sourceMap:true,
    plugins: [
        require('autoprefixer')({
            browsers: ['last 5 versions']
        })
    ]
};