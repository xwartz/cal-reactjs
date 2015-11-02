var webpack = require('webpack');

module.exports = {
  entry:[
    'webpack-dev-server/client?http://127.0.0.1:3000',
    'webpack/hot/only-dev-server',
    './src/app.js'
  ],
  output: {
    path: __dirname + '/dist/',
    publicPath: '/dist/',
    filename: 'app.js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'react-hot!jsx-loader?harmony'
      // loader: 'react-hot!babel-loader?harmony'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};