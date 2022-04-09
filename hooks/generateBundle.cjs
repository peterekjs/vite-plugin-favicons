module.exports = (icons, command) => {
  return async function generateBundle() {
    if (command !== 'build') return

    const { images, files } = await icons

    const outputAsset = ({ name, contents }) => {
      this.emitFile({
        type: 'asset',
        fileName: name,
        source: contents
      })
    }

    files.forEach(outputAsset)
    images.forEach(outputAsset)
  }
}
