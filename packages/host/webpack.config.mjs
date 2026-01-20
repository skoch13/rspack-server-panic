import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/index.js",
  devServer: { port: 3000 },
  plugins: [new HtmlWebpackPlugin()],
};
