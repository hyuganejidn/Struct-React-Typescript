const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// import path from 'path';
// import webpack from 'webpack';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import Dotenv from 'dotenv-webpack';
// import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const configWebpack = (env, { mode = 'development' }) => {
  const isDev = mode === 'development'
  const config = {
    mode,
    entry: { app: './src/index.tsx' },
    target: 'web',
    output: {
      path: path.resolve(__dirname, 'dist'),
      // publicPath: './',
      filename: '[name].[hash:6].min.js',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
      alias: {
        '@': path.resolve('src'),
        '@@': path.resolve(),
      },
    },
    module: {
      rules: [
        {
          test: /\.(tsx|ts)$/,
          exclude: /node_modules|bower_components/,
          use: {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        },
        {
          test: /\.(s[ac]ss|css)$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {
              loader: 'css-loader', // Parse the css into js
              options: { sourceMap: isDev },
            },
            {
              loader: 'sass-loader', // Convert Scss/sass to css
              options: { sourceMap: isDev },
            },
          ],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: true },
            },
          ],
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/i,
          include: path.join(__dirname, 'public'),
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                name: (rath, query) => (isDev ? '[path][name].[ext]' : '[contenthash].[ext]'),
              },
            },
          ],
        },
      ],
    },
    optimization: {
      mangleWasmImports: true,
      mergeDuplicateChunks: true,
      nodeEnv: mode,
    },
    stats: { warningsFilter: /export .* was not found in/ },
    ignoreWarnings: [/Failed to parse source map/],
    plugins: [
      new Dotenv(),
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, 'dist/index.html'),
        template: path.resolve(__dirname, 'src/index.html'),
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: mode, // use 'development' unless process.env.NODE_ENV is defined
      }),
      new CleanWebpackPlugin(),
    ],
  }

  if (isDev) {
    config.devtool = 'source-map'
    config.module.rules.push({
      test: /\.js$/,
      enforce: 'pre',
      exclude: /node_modules/,
      use: ['source-map-loader'],
    })
    config.watch = true
    config.watchOptions = {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/,
    }
    config.plugins = [...config.plugins, new webpack.ProgressPlugin(), new webpack.HotModuleReplacementPlugin()]
    config.devServer = {
      contentBase: path.resolve(__dirname, 'src'),
      open: true,
      hot: true,
      port: 9090,
      compress: true,
      publicPath: '/',
      watchContentBase: true,
      stats: {
        colors: true,
        hash: false,
        version: false,
        timings: true,
        assets: true,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: true,
        errorDetails: true,
        warnings: false,
        publicPath: false,
      },
    }
    config.optimization.minimize = false
  } else {
    config.plugins = [...config.plugins, new MiniCssExtractPlugin({ filename: './src/index.css' })]
    config.optimization.minimize = true
  }
  return config
}
module.exports = configWebpack
// export default configWebpack;
