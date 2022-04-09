import type { Plugin } from 'vite'

declare function createFaviconsPlugin(
  src: string
): Plugin

export default createFaviconsPlugin
