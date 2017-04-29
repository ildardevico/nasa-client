import Webpack from 'webpack'
const HotModuleReplacementPlugin = new Webpack.HotModuleReplacementPlugin()
const NoErrorsPlugin = new Webpack.NoErrorsPlugin()
import config from './config'

const {
  hotLoader: {
    host:hotHost,
    port: hotPort
  }
} = config

export default {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${hotHost}:${hotPort}`,
    'webpack/hot/dev-server',
    'babel-polyfill',    
    `${__dirname}/src/app.js`
  ],
  output: {
    path: `${__dirname}/public/`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel?cacheDirectory'
      },
      {
        test: /\.(scss|sass|css)$/,
        loader: 'style-loader!css-loader!sass-loader?cacheDirectory'
      }
    ]
  },
  resolve: {
    modulesDirectories: [
      "src",
      "node_modules"
    ]
},
  plugins: [
    HotModuleReplacementPlugin,
    NoErrorsPlugin
  ]
}
