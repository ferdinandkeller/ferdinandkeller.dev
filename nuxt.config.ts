// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        shim: false
    },
    modules: [
        '@nuxt/content',
    ],
    css: [
        '@/assets/fontfaces.scss',
        '@/assets/style.scss'
    ]
})