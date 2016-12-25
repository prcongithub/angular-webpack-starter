var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: {
    app: './app.js',
    vendor: './vendors.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      "window.Tether": 'tether'
    }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  },
  rules: [
    {
      test: /\.css$/,
      use: [
        { loader: 'style-loader'},
        {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }
      ]
    }
  ]
};
