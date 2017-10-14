const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  BUILD: path.resolve(__dirname, 'build'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js')
};

module.exports = {
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.BUILD,
    filename: 'main.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: paths.JS
      },
      {
        test: /\.(scss)$/,
        include: path.join(paths.SRC, 'scss'),
        use: [{
          loader: 'style-loader' // inject CSS to page
        }, {
          loader: 'css-loader' // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
                require('precss'),
                require('autoprefixer')
              ]
            }
          }
        }, {
          loader: 'sass-loader' // compiles SASS to CSS
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html')
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    })
  ],
  devServer: {
    contentBase: paths.SRC
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};