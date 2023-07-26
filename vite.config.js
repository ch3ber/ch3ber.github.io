import { defineConfig } from 'vite'

// plugins
import { createHtmlPlugin } from 'vite-plugin-html'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      entry: 'src/index.js',
      template: 'index.html'
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 10,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 10
      },
      mozjpeg: {
        quality: 20
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    })
  ]
})
