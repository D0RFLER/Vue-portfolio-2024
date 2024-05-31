module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/Vue-Portfolio-2024/'
        : '/'
}

export default defineConfig({
    assetsInclude: ['**/*.PNG'],
  })