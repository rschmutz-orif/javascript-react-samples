const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[fullhash].bundle.js',
        clean: true
    },
    target: 'web',
    devServer: {
        port: '4000',
        open: true,
        hot: true,
        liveReload: true,
        historyApiFallback:true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(css|pcss)$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.tmpl.html')
        })
    ]
};
