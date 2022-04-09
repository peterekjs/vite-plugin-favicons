# @peterek/vite-plugin-favicons
Simple Vite plugin using [favicons](https://github.com/itgalaxy/favicons) library under the hood
to generate favicons with manifest files from yor source image. Nothing more, nothing less.

1. Add plugin to your Vite configuration
    ```js
    // vite.config.js
    import favicons from '@peterek/vite-plugin-favicons'

    export default {
      plugins: [
        favicons('src/assets/icon.svg')
      ]
    }
    ```

1. Then just enter `<!-- FAVICONS -->` comment at the end of head section in the `index.html` file
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Vite app</title>
    <!-- FAVICONS -->
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>

```


## Contribution

You're free to contribute to this project by submitting [issues](https://github.com/josh-hemphill/vite-plugin-favicon/issues) and/or [pull requests](https://github.com/josh-hemphill/vite-plugin-favicon/pulls).

## License

This project is licensed under [MIT](https://github.com/josh-hemphill/vite-plugin-favicon/blob/latest/LICENSE).

[favicons]: https://github.com/haydenbleasel/favicons
