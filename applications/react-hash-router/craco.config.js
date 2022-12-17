const { name } = require('./package')

module.exports = {
  devServer(devServerConfig) {
    const config = devServerConfig

    config.headers = {
      'Access-Control-Allow-Origin': '*',
    }
    config.historyApiFallback = true
    config.hot = false
    config.liveReload = false

    return config
  },
  eslint: {
    enable: false,
  },
  webpack: {
    configure(webpackConfig) {
      webpackConfig.output.library = `${name}-[name]`
      webpackConfig.output.libraryTarget = 'umd'
      webpackConfig.output.globalObject = 'window'
      return webpackConfig
    },
  },
}
