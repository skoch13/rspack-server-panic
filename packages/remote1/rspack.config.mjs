import { rspack } from "@rspack/core";

export default {
  mode: "development",
  entry: "./src/index.js",
  devServer: { port: 3001 },
  plugins: [new rspack.HtmlRspackPlugin()],
};
