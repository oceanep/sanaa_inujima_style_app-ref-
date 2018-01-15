/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */

var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    autoprefixer = require("autoprefixer");

module.exports = {
  devtool: 'eval',
  entry: {
    'index':  [
      'eventsource-polyfill', // necessary for hot reloading with IE
      './src/index',
      "webpack/hot/dev-server"
    ]
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /(node_modules|bower_components)/,
              use: ['babel-loader'],
          },{
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                  fallbackLoader: 'style-loader',
                  loader: [
                    {
                      loader: 'css-loader',
                      options: {
                        modules: true,
                        localIdentName: '[local]' // better for debugging

                      }
                    },
                    {
                      loader: 'postcss-loader', // postcss loader so we can use autoprefixer
                      options: {
                        config: {
                          path: 'postcss.config.js'
                        }
                      }
                    }
                  ],
                  publicPath: '/dist'
              })
          },{
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                  fallbackLoader: 'style-loader',
                  loader: [
                    {
                      loader: 'css-loader',
                      options: {
                        modules: true,
                        localIdentName: '[local]__[hash:base64:5]' // better for debugging

                      }
                    },
                    {
                      loader: 'postcss-loader', // postcss loader so we can use autoprefixer
                      options: {
                        config: {
                          path: 'postcss.config.js'
                        }
                      }
                    },
                    'sass-loader'
                  ],
                  publicPath: '/dist'
              })
          }, {
              test: /\.(png|jpg|gif)$/,
              use: ['url-loader?limit=8192']
          },
          {
              test: /\.json$/,
              use: ['json-loader']
          },
          {
              test: /\.(ttf|eot|svg|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              use: ["file-loader"]
          },
          {
              test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              use: ["url-loader?limit=10000&mimetype=application/font-woff"]
          }
      ]
  },
  devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      stats: "errors-only",
      open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'appbar_title': JSON.stringify('React-Redux Starter'),
      },
      '__DEVTOOLS__': true
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.template_dev.html',
      // favicon: './src/images/favicon.ico',
      chunks: ['index'],
    }),
    new ExtractTextPlugin({
        filename: 'app.css',
        disable: false,
        allChunks: true
    }),
    /* You can use jquery if you need it
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    })
    */
  ],

};
