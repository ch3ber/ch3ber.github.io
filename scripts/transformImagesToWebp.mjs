import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'

// (async () => {
await imagemin(['src/public/img/projects/*.{jpg,png}'], {
  destination: 'public/img',
  plugins: [
    imageminWebp({ quality: 50 })
  ]
})
// })()

console.log('Images optimized')
