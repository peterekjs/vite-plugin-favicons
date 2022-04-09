const { extname } = require('path')
const contentTypeByExtension = require(__dirname + '/contentTypeByExtension.cjs')

module.exports = (name) =>
  contentTypeByExtension[extname(name)] ?? contentTypeByExtension.DEFAULT
