const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default
const { merge } = require('webpack-merge')

const { name } = require('./package')

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options)

  const singleSpaConfig = {
    externals: {
      'zone.js': 'Zone',
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
    },
  }

  return merge(singleSpaWebpackConfig, singleSpaConfig)
}
