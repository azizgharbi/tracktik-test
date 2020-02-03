const path = require("path"),
  { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  entry: {
    main: "./public/js/main.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public/js/dist")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    extensions: ["*", ".js", ".vue", ".json"],
    alias: {
      vue: "vue/dist/vue.js"
    }
  }
};
