// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n',['nuxt-mail', {
    message: {
      to: 'nikitagaluh@kapusin.si',
    },
    smtp: {
      host: "eh2.neoserv.si",
      port: 465,
      auth:{
        user: "nikitagaluh@kapusin.si",
        pass: "U!Wk6968Hn$#&M"
      }
    },
  }],],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
