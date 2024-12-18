import Dotenv from "dotenv-webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

export default (env) => {
  const envFile = env.NODE_ENV ? `.env.${env.NODE_ENV}` : ".env.development";
  return {
    entry: "./src/leetcode-75/two-pointers/283-move-zeroes.js",
    output: {
      filename: "bundle.js",
      path: path.resolve("dist"),
      publicPath: "/",
      libraryTarget: "umd",
      clean: true,
    },
    mode: env.NODE_ENV || "development",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
    plugins: [
      new Dotenv({
        path: envFile,
      }),
      new HtmlWebpackPlugin({
        template: "./index.html",
        filename: "index.html",
      }),
    ],
    watch: true,
    devServer: {
      static: "./dist",
      hot: true,
      port: 8080,
      open: true,
    },
  };
};
