export default (icons, outputMiddleware) => {
  return async function configureServer(server) {
    const { images, files } = await icons
    const mw = server.middlewares

    return () => {
      files.forEach(({ name, contents }) => {
        mw.use(`/${name}`, outputMiddleware(name, contents))
      })

      images.forEach(({ name, contents }) => {
        mw.use(`/${name}`, outputMiddleware(name, contents))
      })
    }
  }
}
