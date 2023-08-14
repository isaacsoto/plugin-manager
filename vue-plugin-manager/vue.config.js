const webpack = require('webpack');
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  publicPath: './',

  filenameHashing: false,
  
  transpileDependencies: true,

  devServer: {
    proxy: {
      '/api': {
        target: 'https://cdn.softube.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '/api/v1' },
      },
    },
  },
  
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          // Define your API URL here for different environments
          VUE_APP_API_URL: JSON.stringify('https://cdn.softube.com/api/v1'),
        },
      }),
    ],
  },
})
