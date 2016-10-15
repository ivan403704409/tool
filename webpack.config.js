var path = require('path')
var webpack = require('webpack')
const debug = process.env.NODE_ENV !== 'production'
module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    // publicPath: debug ? '' :'/dist/',
    publicPath: debug ? '/dist/' : './dist/',
    filename: 'build.js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
      'components': __dirname + '/src/components',
      'src': __dirname + '/src',
    },
    extensions: ['', '.vue', '.js', '.json', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css!sass',
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|eot|woff)$/,
        loader: 'file',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  babel: {
      presets: ['es2015', "stage-0"],
      // plugins: ['transform-runtime']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}
