const HtmlWebpackPlugin = require('html-webpack-plugin');

const ruleForStyles = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const ruleForJS = {
  test: /\.js$/,
  loader: 'babel-loader',
};

const rules = [ruleForJS, ruleForStyles];

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
  ],
  module: { rules },
};