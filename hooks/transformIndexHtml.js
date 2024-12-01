export default (icons) => {
  return async function transformIndexHtml(html) {
    const { html: favicon } = await icons
    return html.replace('<!-- FAVICONS -->', favicon.join('\n'))
  }
}
