// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "nuxt-headlessui",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/color-mode",
  ],
  app: {
    baseURL: "/",
  },
  colorMode: {
    preference: "system",
    classSuffix: "",
    storageKey: "gg-color-theme",
  },
});
