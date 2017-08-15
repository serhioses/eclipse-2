const webpack = require('webpack'),
  UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
  path = require('path'),
  isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';


var config = [{
  entry: path.resolve(__dirname, './eclipse.js'),
  externals: {
    jquery: {
      commonjs: 'jquery',
      commonjs2: 'jquery',
      amd: 'jquery',
      umd: 'jquery',
      root: 'jQuery'
    }
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'eclipse.js',
    library: 'eclipse',
    libraryTarget: 'umd',
    umdNamedDefine: false
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: isDevelopment ? 'cheap-inline-module-source-map' : false,
  watch: isDevelopment
}];

module.exports = config;
