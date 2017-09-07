var webpack = require("webpack")
var path = require("path")
const BASE_DIR = path.resolve(__dirname);
const BUILD_DIR = path.join(BASE_DIR, 'dist/assets')
process.noDeprecation = true

module.exports = {
  entry: "./index.js",
  output: {
      path: BUILD_DIR,
      filename: "bundle.js",
      sourceMapFilename: 'bundle.map'
  },
  devtool: '#source-map',
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /(node_modules)/,
              loader: 'babel-loader',
              query: {
                  presets: ['env', 'stage-0']
              }
          },
          {
              test: /\.css$/,
              use: ['style-loader','css-loader', {
                  loader: 'postcss-loader',
                  options: {
                    plugins: () => [require('autoprefixer')]
                  }}]
          }
      ]
  },
  plugins: [

      new webpack.DefinePlugin({
          "process.env": {
              NODE_ENV: JSON.stringify("production")
          }
      }),

      new webpack.optimize.UglifyJsPlugin({
          sourceMap: true,
          warnings: false,
          mangle: false
      })
  ]
}
