const getContentType = require(__dirname + '/getContentType.cjs')

function outputMiddleware(name, contents) {
  return (req, res, next) => {
    res.setHeader('Content-Type', getContentType(name))
    res.write(contents, 'utf8')
    next()
  }
}

module.exports = outputMiddleware
