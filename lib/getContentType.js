import { extname } from 'node:path'
import contentTypeByExtension from './contentTypeByExtension.js'

export default (name) => contentTypeByExtension[extname(name)] ?? contentTypeByExtension.DEFAULT
