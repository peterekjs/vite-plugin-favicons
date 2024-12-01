export default (icons, state) => {
  return async function generateBundle() {
    if (state.command !== 'build') return

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
