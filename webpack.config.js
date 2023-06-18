const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const EslintPlugin = require('eslint-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/ts/index',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.ts$/i,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project Repo',
      favicon: './src/icons/favicon.ico',
    }),
    new EslintPlugin({
      extensions: 'ts',
    }),
  ],
};
