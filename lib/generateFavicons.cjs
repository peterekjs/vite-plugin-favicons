function generateFavicons(src) {
  return new Promise(async (resolve) => {
    const { favicons } = await import('favicons')
    resolve(favicons(src))
  })
}

module.exports = generateFavicons
