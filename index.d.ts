import type { FaviconOptions } from 'favicons'
import type { Plugin } from 'vite'

declare function createFaviconsPlugin(
  src: string,
  options?: Partial<FaviconOptions>
): Plugin

export default createFaviconsPlugin
