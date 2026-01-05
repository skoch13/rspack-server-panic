import { rspack } from "@rspack/core";

export default {
  mode: "development",
  entry: "./src/index.js",
  devServer: { port: 3002 },
  plugins: [
    new rspack.HtmlRspackPlugin(),
    {
      apply(compiler) {
        compiler.hooks.done.tap("Crash", () => process.abort());
      },
    },
  ],
};
