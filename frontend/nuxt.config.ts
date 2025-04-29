// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    shim: false, // VScodeの拡張機能を使うためにfalse
    strict: true, // 型チェックの厳格化
    typeCheck: true // 開発、build時の型チェックを有効に。vue-tscとtypescriptのインストールが必要
  },
})
