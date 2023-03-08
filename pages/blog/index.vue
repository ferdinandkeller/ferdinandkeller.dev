<template lang="pug">
.blog
    ContentNavigation(v-slot="{ navigation }")
        ul.spacer
            li(v-for="(link, link_id) in navigation" :key="link_id")
                NuxtLink(:to="'blog' + link._path")
                    h2 {{ link.title }}
                    .published {{ (new Date(link.published_at)).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', weekday: 'long' }) }}
                    p {{ link.description }}
</template>

<style lang="scss">
.blog {
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;

        li {
            list-style: none;
            width: 100%;

            a {
                padding: 3rem;
                border: solid 1.5px hsl(0, 0%, 16%);
                border-radius: 5px;
                background-color: #0e0e10;
                width: 100%;
                display: flex;
                flex-direction: column;

                .published {
                    font-weight: 800;
                    text-transform: uppercase;
                    font-size: 1.2rem;
                    color: hsl(0, 0%, 30%);
                    margin-top: .5rem;
                    margin-bottom: 1.5rem;
                }

                &:hover {
                    cursor: pointer;
                    box-shadow: 0 3rem 10rem rgba(255, 255, 255, .1);
                }
            }

            &:not(:last-child) {
                margin-bottom: 4rem;
            }
        }
    }
}
</style>