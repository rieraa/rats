const { Configuration } = require('webpack');
const path = require('node:path');
const htmlWebpackPlugin = require('html-webpack-plugin');

/**
 * @type{Configuration}
 */
const config = {
  mode: 'development',
  entry: './src/main.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
    clean: true, // 清除上次的打包结果
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'static/[name][hash].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html',
    }),
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
};

module.exports = config;
