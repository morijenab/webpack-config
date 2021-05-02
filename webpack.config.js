const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: { extensions: [".js", ".jsx"] },
  plugins: [new MiniCssExtractPlugin()],
  devtool: "source-map",
};
