const path = require("path");
module.exports = {
  entry: "./src/webview/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "out"),
  },
  resolve: { extensions: [".js", ".ts", ".tsx"] },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
    ],
  },
  mode: "production"
};
