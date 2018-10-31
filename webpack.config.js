const path = require("path");

module.exports = {
  mode: "development",
  context: path.join(__dirname, "src/"),
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
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    historyApiFallback: true // fallback to /index.html so react-router works
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
