var path = require("path");
module.exports = {
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
