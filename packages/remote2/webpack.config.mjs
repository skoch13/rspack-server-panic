import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/index.js",
  devServer: { port: 3002 },
  plugins: [
    new HtmlWebpackPlugin(),
    {
      apply(compiler) {
        compiler.hooks.done.tap("Crash", () => process.abort());
      },
    },
  ],
};
