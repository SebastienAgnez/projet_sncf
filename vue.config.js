const publicPath = process.env.NODE_ENV === 'production' ? '/projet_sncf/' : '/'

module.exports = {
  publicPath: publicPath,
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  }
}
