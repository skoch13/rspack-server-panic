import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/index.js",
  devServer: { port: 3001 },
  plugins: [new HtmlWebpackPlugin()],
};
