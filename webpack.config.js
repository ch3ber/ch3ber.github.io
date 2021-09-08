const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name][contenthash].js',
      assetModuleFilename: 'assets/img/[hash][ext][query]'
   },
   resolve: {
      extensions: ['.js'],
      alias: {
         '@styles': path.resolve(__dirname, 'src/scss/'),
         '@images': path.resolve(__dirname, 'src/img/'),
      }
   },
   module: {
      rules: [
         {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader'
            }
         },
         {
            test: /\.scss|.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader,
               "css-loader",
               {
                  loader: "sass-loader",
                  options: {
                     implementation: require.resolve("sass"),
                  },
               },
            ],
         },
         {
            test: /\.(jpe?g|png|gif|svg)$/i,
            type: 'asset/resource'
         },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator: {
               filename: "assets/fonts/[name].[contenthash].[ext]"
            }
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         inject: true,
         template: './public/index.html',
         filename: './index.html',
      }),
      new MiniCssExtractPlugin({
         filename: "assets/[name].[contenthash].css"
      }),
      new CopyPlugin({
         patterns: [
            {
               from: path.resolve(__dirname, 'src/img'),
               to: 'assets/img'
            }
         ]
      }),
      new CleanWebpackPlugin(),
      new ImageMinimizerPlugin({
         deleteOriginalAssets: false,
         filename: "[path][name].webp",
         minimizerOptions: {
            plugins: ["imagemin-webp"],
         },
      }),
      new ImageMinimizerPlugin({
         minimizerOptions: {
            plugins: ["pngquant"],
         },
      }),
   ],
   optimization: {
      minimize: true,
      minimizer: [
         new CssMinimizerPlugin(),
         new TerserPlugin(),
      ]
   }
}
