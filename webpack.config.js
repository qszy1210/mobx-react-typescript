var path = require('path');
var webpack = require('webpack');
var fs = require("fs")
const resolve = file => path.resolve(__dirname, file)
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    devtool: 'eval',
    entry: {
        // 'webpack-dev-server/client?http://localhost:3000',
        app:['webpack-dev-server/client?http://localhost:7777','./src/app'],
        // app:['./src/app'],
        vendor: ["react","react-dom"],
        images: fs.readdirSync(__dirname + "/src/images").reduce(function (entries, file) {
            if (fs.statSync(path.join(__dirname + "/src/images", file)).isFile())
                entries.push(path.join(__dirname + "/src/images", file))
            return entries
        }, [])
    },
    output: {
        path: path.join(__dirname, 'static'),
        filename: '[name].js',
        publicPath: '/'
    },
    // resolveLoader: {
    //     root: resolve('./node_modules')
    // },

    resolveLoader: {
        modules: [ 'node_modules' ],
        extensions: [ '.js', '.json' ],
        mainFields: [ 'loader', 'main' ]
    },

    devServer: {
        publicPath        : '/',
        // host: "0.0.0.0", //如果需要外部访问，增加此配置 added by zhangqingsong on 20170321.
        port: 3000,
        hot: true,
        // disableHostCheck: true,
        // // hotOnly: true,
        inline: true,
        quiet: false,
        noInfo: false,
        stats: {
            progress: true,
            colors: true,
            assets: true,
            version: true,
            hash: true,
            timings: true,
            chunks: false,
            chunkModules: false
        },
        historyApiFallback: false,
        // proxy: {
        //     '**': {
        //         target: `http://127.0.0.1:7000`,
        //         secure: false
        //     }
        // }
    },

    resolve: {
        // modulesDirectories: [
        //     'node_modules'
        // ],
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
            ],
        extensions: ['.js', '.ts', '.tsx', '.jpeg']
    },
    module: {
        rules: [{
            test  : /\.(tsx|ts)?$/,
            loader: 'ts-loader',
            },
            {
            test: /\.(png|jpe?g)$/,
            loader: 'file-loader?name=images/[name].[ext]'
            // loader: 'url-loader?limit=8192&name=images/[hash:8]-[name].[ext]'
            // include: path.join(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader", // compiles Sass to CSS
                    // options: {
                    //     includePaths: ["absolute/path/a", "absolute/path/b"]
                    // }
                }]
            }

        ]
    },
    context: path.join(__dirname),
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //hot loading
        new webpack.optimize.CommonsChunkPlugin({name:"vendor"}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new CopyWebpackPlugin([ { from: './src/images/' } ]),
        new HtmlWebpackPlugin({
            template: './index.html', // Move the index.html file
            inject  : true // inject all files that are generated by webpack, e.g. bundle.js, main.css with the correct HTML tags
        })
    ]
};
