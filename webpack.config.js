const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PUBLIC_PATH = '/';

module.exports = {
    entry: {
        app: "./src/main.js"
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'), // base path where to send compiled assets
        publicPath: PUBLIC_PATH // base path where referenced files will be looked for
    },
    devServer: {
        contentBase: path.join(__dirname, './'), // where dev server will look for static files, not compiled
        publicPath: PUBLIC_PATH, //relative path to output path where devserver will look for compiled files
        hot: true,
        open: true
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src') // shortcut to reference src folder from anywhere
        }
    },
    module: {
        rules: [
            {
                // compile es6 jsx into normal ES5
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css)$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            title: "Learning Webpack"
        }),
    ]
}