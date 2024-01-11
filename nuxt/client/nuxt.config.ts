// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    'bulma/css/bulma.css', // sempre primeiro que o css
    '@/assets/css/main.css',
    
  ]
})
