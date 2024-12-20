const configureServer = require(__dirname + '/hooks/configureServer.js')
const generateBundle = require(__dirname + './hooks/generateBundle.js')
const transformIndexHtml = require(__dirname + './hooks/transformIndexHtml.js')
const generateFavicons = require(__dirname + '/lib/generateFavicons.js')
const outputMiddleware = require(__dirname + '/lib/outputMiddleware.js')

function createFaviconsPlugin(src, options) {
  const icons = generateFavicons(src, options)
  const state = {
    command: 'unknown'
  }

  return {
    name: 'favicons',

    async configResolved(config) {
      state.command = config.command
    },

    configureServer: configureServer(icons, outputMiddleware),
    transformIndexHtml: transformIndexHtml(icons),
    generateBundle: generateBundle(icons, state),
  }
}

module.exports = createFaviconsPlugin
