const HtmlWebpackPlugin = require('html-webpack-plugin');

const ruleForStyles = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const ruleForJS = {
  test: /\.js$/,
  loader: 'babel-loader',
};

const rulesForImgs = {
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
};

const rules = [ruleForJS, ruleForStyles, rulesForImgs];

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
  ],
  module: { rules },
};