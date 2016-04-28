var webpack = require('webpack')
var path = require('path')
var libraryName = 'awesome-amplitude'
var outputFile = libraryName + '.js'

var config = {
  entry: path.join(__dirname, 'src/awesome-amplitude.js'),
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: outputFile,
    library: 'awesomeAmplitude',
    libraryTarget: 'commonjs2',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  externals: {
    "amplitude": "amplitude"
  }
}

module.exports = config
