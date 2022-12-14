const path = require('path');

module.exports = {
  performance: {
    hints: false,
  },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],
      },
      { test: /\.png/, type: 'asset/resource' },
    ],
  },
};
