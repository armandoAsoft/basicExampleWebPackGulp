var webpack = require('webpack');
var glob_entries = require('glob-array');
var extractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var appFiles = glob_entries.sync(['./app/**/*.js', './app/**/*.css']).reverse();

appFiles.push('./node_modules/bootstrap/dist/css/bootstrap.min.css');
appFiles.push('./node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css');
appFiles.push('./node_modules/font-awesome/scss/font-awesome.scss');

module.exports = {
    entry: {
        app: appFiles,
        vendors: [
            './node_modules/angular/angular.min.js',
            './node_modules/angular-animate/angular-animate.min.js',
            './node_modules/angular-route/angular-route.min.js',
            './node_modules/angular-touch/angular-touch.min.js',
            './node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
            './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js'
        ]
    },
    output: {
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [ 'html-loader' ]
            },
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader' ]
                })
            },
            {
                test: /\.scss$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader', 'autoprefixer-loader', 'sass-loader' ]
                })
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: ['url-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
                loader: 'jshint-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendors']
        }),
        new extractTextPlugin({
            filename: 'style.bundle.css', allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: './main.html',
            filename: 'index.html'
        })
        //new webpack.optimize.UglifyJsPlugin()
    ]
}