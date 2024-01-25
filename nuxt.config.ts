// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@unocss/nuxt", "nuxt-icon"],
  css: ["~/assets/css/style.css"],
  plugins: ["~/plugins/gsap.ts"],
});
