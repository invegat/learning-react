var webpack = require("webpack")
var path = require("path")



module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.html', '.json']
    },
    entry: path.join(__dirname,"src/index.jsx"),
  output: {
      path: path.join(__dirname,"dist/assets"),
      filename: "bundle.js",
      sourceMapFilename: 'bundle.map'
  },
  devtool: '#source-map',
  module: {
      rules: [
          {
              test: /\.jsx?$/,
              exclude: /(node_modules)/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['env', 'react', 'stage-0']
                  }
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
              NODE_ENV: JSON.stringify("development")
          }
      }),

      new webpack.optimize.UglifyJsPlugin({
          sourceMap: true,
          warnings: false,
          mangle: false
      })
  ]
}
