var path = require("path");

module.exports = {
  test: /\.scss$/,
  use: [
    {
      loader: "style-loader"
    },
    {
      loader: "css-loader"
    },
    {
      loader: "sass-loader",
      options: {
        sourceMap: true,
        includePaths: [
          "app/stylesheets",
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "node_modules/foundation-sites/scss")
        ]
      }
    }
  ]
};
