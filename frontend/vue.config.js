const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
  ],

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/main.scss"
        `,
      },
    },
  },
});
