// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        // turn off shims because we use take-over mode
        shim: false
    },
    modules: [
        // used to handle rendering markdown blog posts
        '@nuxt/content',
    ],
    content: {
        navigation: {
            // include the following fields from the frontmatter
            // into the navigation data
            fields: ['description', 'published_at' ]
        }
    },
    css: [
        // global style font faces
        '@/assets/fontfaces.scss',
        // global style
        '@/assets/style.scss'
    ],
    app: {
        pageTransition: {
            name: 'page', mode: 'out-in'
        },
        head: {
            title: 'Ferdinand Keller'
        }
    }
})