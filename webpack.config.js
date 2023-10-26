const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    devServer: {
      port: 8088,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack Block 1.6",
        template: "./src/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "./styles/main.css",
      }),
    ],
    module: {
      rules: [
        {
            test: /\.html$/i,
            loader: 'html-loader'
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
        {
          test: /\.scss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
        },
        {
          test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
          type: 'asset/inline'
        },
        {
          test: /\.js$/i,
          include: path.resolve(__dirname, "src"),
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
  };