module.exports = {
    entry: ['./utils.js', './app.js'],
    output: {
        filename: 'bundle.js'
    },
    watch: false,

    module: {
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader',
                enforce: 'pre',
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.es6']
    }
}