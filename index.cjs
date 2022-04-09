const generateFavicons = require(__dirname + '/lib/generateFavicons.cjs')
const outputMiddleware = require(__dirname + '/lib/outputMiddleware.cjs')

function createFaviconsPlugin(src) {
  const icons = generateFavicons(src)
  let command

  return {
    name: 'favicons',

    async configResolved(config) {
      command = config.command
    },

    configureServer: require('./hooks/configureServer.cjs')(icons, outputMiddleware),
    transformIndexHtml: require('./hooks/transformIndexHtml.cjs')(icons),
    generateBundle: require('./hooks/generateBundle.cjs')(icons, command),
  }
}

module.exports = createFaviconsPlugin
