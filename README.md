# @peterek/vite-plugin-favicons
Simple Vite plugin using [favicons](https://github.com/itgalaxy/favicons) library under the hood
to generate favicons with manifest files from yor source image. Nothing more, nothing less.


```js
// vite.config.js
import favicons from '@peterek/vite-plugin-favicons'

export default {
  plugins: [
    favicons('src/assets/icon.svg')
  ]
}
```
## Contribution

You're free to contribute to this project by submitting [issues](https://github.com/josh-hemphill/vite-plugin-favicon/issues) and/or [pull requests](https://github.com/josh-hemphill/vite-plugin-favicon/pulls).

## License

This project is licensed under [MIT](https://github.com/josh-hemphill/vite-plugin-favicon/blob/latest/LICENSE).

[favicons]: https://github.com/haydenbleasel/favicons
