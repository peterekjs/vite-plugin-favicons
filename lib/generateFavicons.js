export default function generateFavicons(src, options) {
  return new Promise(async (resolve) => {
    const { favicons } = await import('favicons')
    resolve(favicons(src, options))
  })
}
