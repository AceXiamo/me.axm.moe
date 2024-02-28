// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'AceXiamo',
    },
  },
  modules: ['@unocss/nuxt', 'nuxt-icon', '@nuxtjs/color-mode', '@nuxtjs/i18n'],
  css: ['~/assets/css/style.css'],
  plugins: ['~/plugins/gsap.ts', '~/plugins/avatar.client.tsx'],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
    },
  },
})
