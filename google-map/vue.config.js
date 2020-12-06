var path = require("path");
module.exports = {
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true
  },
  transpileDependencies: ["vuetify"],
  // https://katuo-ai.com/vuejs-relative-path
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
      },
    },
  },
};
