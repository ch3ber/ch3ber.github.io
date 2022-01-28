const path = require('path')
// const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    assetModuleFilename: 'assets/img/[hash][ext][query]'
  },
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', 'jsx'],
    alias: {
      '@styles': path.resolve(__dirname, 'src/scss/'),
      '@images': path.resolve(__dirname, 'src/img/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[contenthash].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
      filename: './index.html'
    })
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    open: true
  }
}
// new MiniCssExtractPlugin({
// filename: 'assets/[name].[contenthash].css'
// }),
// new CopyPlugin({
// patterns: [
// {
// from: path.resolve(__dirname, 'src/img'),
// to: 'assets/img'
// }
// ]
// }),
// new ImageMinimizerPlugin({
// deleteOriginalAssets: false,
// filename: '[path][name].webp',
// minimizerOptions: {
// plugins: ['imagemin-webp']
// }
// }),
// new ImageMinimizerPlugin({
// minimizerOptions: {
// plugins: ['pngquant']
// }
// })
