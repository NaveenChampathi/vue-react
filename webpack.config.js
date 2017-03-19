module.exports = {
  // This is the "main" file which should include all other modules
  entry: './main.js',
  // Where should the compiled file go?
  output: {
    // To the `dist` folder
    path: __dirname + '/dist',
    publicPath: 'dist/',
    // With the filename `build.js` so it's dist/build.js
    filename: 'build.js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'bootstrap$': 'bootstrap/dist/css/bootstrap.min.css'
    }
  },
  module: {
    // Special compilation rules
    loaders: [
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: /\.js$/,
        // Transform it with babel
        loader: 'babel-loader',
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loaders: [
            'style-loader',
            'css-loader?importLoaders=1',
            'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000
        }
      },
      {
        test   :/\.jsx?$/,
        exclude:/(node_modules|bower_components)/,
        loader :'babel-loader'
      }
    ]
  }
}
