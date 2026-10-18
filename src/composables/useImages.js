const images = import.meta.glob('/src/assets/images/**/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default'
})

export const getImageUrl = (name) => {
  // name = "logo.png"
  console.log('ici', images)
  const key = Object.keys(images).find((k) => k.endsWith(`/${name}`))
  return key ? images[key].toString() : ''
}
