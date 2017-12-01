const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const extractPlugin = new ExtractTextPlugin({
    filename: 'main.css',
    allChunks: true,
    disable: process.env.NODE_ENV != 'production'
})

module.exports = {
    devtool: 'eval',
    entry: [
        'react-hot-loader/patch',
        'webpack/hot/only-dev-server',
        'tether',
        'font-awesome/scss/font-awesome.scss',
        './src/app.js',
        ],
    output: {
        // to create an absolute path
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        // publicPath: '/dist'
    },
    devServer: {

        contentBase: './', //seems to fixed the wds error
        compress: true, //gzip the files
        port: 3000,
        hot: true,
        historyApiFallback: true,
        inline: true,
        // progress: true,

    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'react-hot-loader/webpack', 'babel-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins() {

                                    return [
                                        precss,
                                        autoprefixer
                                    ];
                                }
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })

            },
            {
                test: /\.css$/,
                // with use we can specify multiple loaders
                // the last element is applied first
                //css-loader will make it understand the imports and then the style loader will allow the imports to the head otherwise we use the extract-text-webpack-plugin to extract the css to a separate file
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: 
                        {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                        }
                    }
                ]
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000',
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader',
            },
            {
                test: /font-awesome\.config\.js/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'font-awesome-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: 
                        {

                            name: '[name].[ext]', //otherwise it will use hash and not the name of the file
                            outputPath: '/', //to put it to separate folder
                            publicPath: '/'
                        }
                    }
                ],
                exclude: path.resolve(__dirname, 'src/index.html')
            },
            {
                test: /bootstrap\/dist\/js\/umd\//,
                use: 'imports-loader?jQuery=jquery'
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            cache: '/dist',
            // compress: true
        }),
        extractPlugin,

        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: "Haskell",
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: 'src/index.html',
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          tether: 'tether',
          Tether: 'tether',
          'window.Tether': 'tether',
          Popper: ['popper.js', 'default'],
          'window.Tether': 'tether',
          Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
          Button: 'exports-loader?Button!bootstrap/js/dist/button',
          Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
          Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
          Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
          Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
          Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
          Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
          Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
          Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
          Util: 'exports-loader?Util!bootstrap/js/dist/util'
        }),

        new CleanWebpackPlugin(['dist']),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    }
};