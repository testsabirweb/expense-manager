const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{//whenever see a file with extension .js and not in node_modules
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',// there are other dev tools goto webpack/devtools/sourcemaps
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }

}