const path = require('path')
const isLocalDev = () => process.env.VUE_APP_LOCALDEV
const isProductionBuild = () => process.env.NODE_ENV === 'production'

const getPublicPath = () => {
  if (isProductionBuild()) {
      if (isLocalDev()) {
          return path.resolve(__dirname, 'dist')
      }
      return '/card-trick'
  }
  return '/'
}

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: getPublicPath()
}