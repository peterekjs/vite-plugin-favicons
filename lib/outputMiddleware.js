import getContentType from './getContentType.js'

export default function outputMiddleware(name, contents) {
  return (req, res, next) => {
    res.setHeader('Content-Type', getContentType(name))
    res.write(contents, 'utf8')
    next()
  }
}
