module.exports = {
    css: {
      loaderOptions: {
        sass: {
          additionalData: `@import "src/assets/variables.sass"`
        },
            scss: {
          additionalData: `@import "src/assets/variables.scss";`
        },
        less:{

          globalVars: {
            primary: '#fff'
          }
        }
      }
    }
  }

  module.exports = {
    publicPath: '/shop2/'
}


