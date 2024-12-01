import configureServer from './hooks/configureServer.js'
import generateBundle from './hooks/generateBundle.js'
import transformIndexHtml from './hooks/transformIndexHtml.js'
import generateFavicons from './lib/generateFavicons.js'
import outputMiddleware from './lib/outputMiddleware.js'

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

export default createFaviconsPlugin
