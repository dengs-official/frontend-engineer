const isEnvProduction = process.env.NODE_ENV === "production";
const isEnvDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  output: {
    filename: "[name].js",
    clean: true,
  },
  devtool: isEnvDevelopment ? "source-map" : false,
  mode: isEnvDevelopment ? "development" : "production",
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
