const { extname } = require('path')
const contentTypeByExtension = require('./lib/contentTypeByExtension.cjs')

module.exports = (name) =>
  contentTypeByExtension[extname(name)] ?? contentTypeByExtension.DEFAULT
