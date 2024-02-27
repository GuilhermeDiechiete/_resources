
// O arquivo de configuração mínimo exporta a defineNuxtConfig função que contém um objeto com sua configuração. O defineNuxtConfig auxiliar está disponível globalmente sem importação.
export default defineNuxtConfig({
  devtools: { enabled: false },

  // Fornecer uma propriedade em seu permite que você personalize o cabeçalho de todo o seu aplicativo. app.head , nuxt.config.ts
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  // Essas variáveis ​​são expostas ao restante do aplicativo usando o elemento que pode ser composto. useAppConfig
  // title: 'OrgFin',
  // theme: {
  //   dark: true,
  //   colors: {
  //     primary: '#ff0000'
  //   }
  // },


  // Essas variáveis ​​são expostas ao restante do aplicativo usando o elemento que pode ser composto. useRuntimeConfig()
  runtimeConfig: {
    apiSecret: '123', // api secreta
    public: {
      apiBase: '/api' // api base
    }
  }
})
