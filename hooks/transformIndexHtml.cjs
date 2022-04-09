module.exports = (icons) => {
  return async function transformIndexHtml(html) {
    const { html: favicon } = await icons
    return html.replace('<!-- FAVICON -->', favicon.join('\n'))
  }
}
