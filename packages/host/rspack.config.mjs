import { rspack } from "@rspack/core";

export default {
  mode: "development",
  entry: "./src/index.js",
  devServer: { port: 3000 },
  plugins: [new rspack.HtmlRspackPlugin()],
};
