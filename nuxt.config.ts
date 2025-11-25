// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
   modules: [
    '@nuxt/image',
    "@nuxtjs/i18n",
    "@pinia/nuxt"
  ],
  ssr: true,
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
   i18n: {
    // vueI18n: './nuxt-i18n.js', // custom path example
    // locales: ['ar', 'en'],
    defaultLocale: 'ar',
    strategy: 'prefix_except_default',
    langDir: 'locales',
    lazy: true,
    locales: [
      { code: 'ar', name: 'Arabic', file: 'ar.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ]
  },
  css: ["~/assets/scss/global.scss"],
  devtools: { enabled: true }
})
