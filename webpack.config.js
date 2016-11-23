module.exports = {
  entry: './app.js',
  output: {
    path: './',
    filename: 'index.js'
  },
  devServer: {
    inlline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
