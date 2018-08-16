const path = require("path");

module.exports = {
  mode: "development",
  context: path.join(__dirname, "components"),
  entry: ["./index.jsx"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
