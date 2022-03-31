/* eslint-disable quotes */
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
  ],

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/scss/main.scss";`,
      },
    },
  },
});
