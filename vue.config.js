const path = require('path');

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('assets', path.join(__dirname, 'src/assets'))
      .set('src', path.join(__dirname, 'src'))
      .set('views', path.join(__dirname, 'src/views'));
  }
}