const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('components', resolve('./src/components'))
      .set('style', resolve('./src/style'))
      .set('api', resolve('./src/api'))
      .set('utils', resolve('./src/utils'))
  }
}