const path = require('path');

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('assets', path.join(__dirname, 'src/assets'))
      .set('src', path.join(__dirname, 'src'))
      .set('views', path.join(__dirname, 'src/views'));
  },
  devServer: {
    host: 'localhost',
    port: 8081,
    proxy: {
      '/api': {
          target: 'http://127.0.0.1:3000',
          changeOrigin: true,
          secure: false,
          pathRewrite: {
              '^/api': ''
          }
      }
    }
  }
}