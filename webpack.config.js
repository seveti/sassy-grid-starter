const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, "src"),
    devtool: 'source-map',
    entry: {
      index: './app.js'
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: "/dist/",
      filename: '[name].bundle.js'
    },
    mode: 'development',
    module: {
      rules: [  
        { // sass / scss loader for webpack
          test: /\.scss$/,
          use: [
            'style-loader',
            ExtractTextPlugin.loader,
            {
              loader: "css-loader",
              options: {
                  url: true,
                  sourceMap: true
              }
            }, 
            {
              loader: 'sass-loader',
              options: {
                  sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
          options: {
              postcss: [autoprefixer]
          }
      }),
      new ExtractTextPlugin({ // define where to save the file
        filename: '[name].bundle.css',
        chunkFilename: '[name].bundle.css',
      }),
      new UglifyJsPlugin({
        test: /\.js($|\?)/i
      })
    ],
    resolve: {
      extensions: ['.css', '.scss', '.js']
    },
  };

  