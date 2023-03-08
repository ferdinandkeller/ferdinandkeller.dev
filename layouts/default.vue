<template lang="pug">
.layout
    //- beautiful blured circles (these add a lot of depth)
    .circles(:class="{ visible: route_location == RouteLocation.Home || route_location == RouteLocation.Blog }")
        .nice-circle-1
        .nice-circle-2
        .nice-circle-3
        .nice-circle-4
        .nice-circle-5
        .nice-circle-6

    //- the header containing notably the navigation bar
    header(:class="{ opaque: route_location == RouteLocation.BlogPost }")
        .navbar(ref="navbar" :class="{ easter_egg: easter_egg_enabled }")
            NuxtLink(to="/") Home
            NuxtLink(to="/blog") Blog
            NuxtLink(to="/") Contact
            // NuxtLink(to="/") Resume

    //- the content of the page
    main
        slot

    //- a footer to say I'm the designer of the website
    footer
        .note
            .line(@click="easter_egg")
            .text designed & built #[b cookie free] by Ferdinand Keller
</template>

<style lang="scss" scoped>
.circles {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: -1;
    opacity: 0;

    transition: opacity 2s ease, top 2s ease, left 2s ease, right 2s ease;

    &.visible {
        opacity: 1;
    }
}

.nice-circle-1,
.nice-circle-2,
.nice-circle-3,
.nice-circle-4,
.nice-circle-5,
.nice-circle-6 {
    position: absolute;
    width: 800px;
    height: 800px;
    border-radius: 50%;
    filter: blur(30px);
}

.nice-circle-1 {
    top: -200px;
    right: -300px;
    background: radial-gradient(rgba(255, 49, 121, 0.2) 0%, rgba(255, 23, 89, 0.1) 30%, transparent 60%);
}

.nice-circle-2 {
    top: -100px;
    right: -100px;
    background: radial-gradient(rgba(79, 173, 255, 0.2) 0%, rgba(23, 112, 255, 0.1) 30%, transparent 60%);
}

.nice-circle-3 {
    top: 100px;
    right: -200px;
    width: 600px;
    height: 600px;
    background: radial-gradient(rgba(79, 173, 255, 0.2) 0%, rgba(23, 112, 255, 0.1) 30%, transparent 60%);
}


.nice-circle-4 {
    top: calc(100vh - 400px);
    left: -50px;
    width: 500px;
    height: 500px;
    background: radial-gradient(rgba(255, 49, 121, 0.2) 0%, rgba(255, 23, 89, 0.1) 30%, transparent 60%);
}

.nice-circle-5 {
    top: calc(100vh - 500px);
    left: 0px;
    width: 800px;
    height: 800px;
    background: radial-gradient(rgba(79, 173, 255, 0.2) 0%, rgba(23, 112, 255, 0.1) 30%, transparent 60%);
}

.nice-circle-6 {
    top: calc(100vh - 400px);
    left: -100px;
    width: 600px;
    height: 600px;
    background: radial-gradient(rgba(79, 173, 255, 0.2) 0%, rgba(23, 112, 255, 0.1) 30%, transparent 60%);
}

.layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;

    // the header is fixed, it doesn't take space on the document,
    // so we need to add some padding to the top
    $header-height: 6rem;
    padding-top: $header-height * 2;

    header {
        height: $header-height;
        padding: 0 3em;
        display: flex;
        justify-content: right;
        align-items: center;
        user-select: none;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        border-width: 1px;
        border-style: solid;
        border-image: linear-gradient(to left, transparent, rgba(255, 255, 255, .2) 20%, rgba(255, 255, 255, .2) 80%, transparent) 100% 1;
        border-top: none;
        z-index: 10;
        transition: backdrop-filter 2s ease;

        .navbar {
            display: flex;
            flex-direction: row;

            a {
                font-weight: 800;
                position: relative;
                padding: 0 1em;
                padding-top: .2em;
                line-height: 2em;

                &:not(:last-child) {
                    margin-right: 1em;
                }

                &::after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    z-index: -1;
                    border-radius: .2em;
                    transition: background-color .1s ease;
                }

                &:hover {
                    cursor: pointer;

                    &::after {
                        background-color: rgba(255, 255, 255, .15);
                    }
                }
            }

            &.easter_egg {
                a {
                    transition: transform .5s ease;
                    transform: rotate(360deg);
                }
            }
        }

        &.opaque {
            backdrop-filter: blur(8px) brightness(.5);
        }
    }

    main {
        flex-grow: 1;
        padding: 0 $header-height;
    }

    footer {
        display: flex;
        justify-content: right;
        font-size: 1.2rem;
        padding: 1em 2em;
        margin-top: 3em;
        user-select: none;
        cursor: default;

        .note {
            display: flex;
            flex-direction: row;
            align-items: center;

            $line-width: 1.5rem;
            $line-height: .2rem;

            .line {
                background-color: white;
                width: $line-width;
                height: $line-height;
                margin-right: 1.5em;
                transform: translate(50%, -$line-height * .5);
                transition: all .3s ease-out;
                transition-property: width, height, border-radius;

                &:hover {
                    cursor: pointer;
                }
            }

            &:hover {
                .line {
                    width: $line-width * 1.4;
                    height: $line-width * 1.4;
                    border-radius: .2em;
                }
            }
        }
    }
}
</style>

<script lang="ts" setup>
import { onMounted } from 'vue'

const route = useRoute()

enum RouteLocation {
    Home,
    Blog,
    BlogPost,
    Unknown,
}

const route_location = computed(() => {
    if (route.path === '/') {
        return RouteLocation.Home
    } else {
        if (route.path.startsWith('/blog')) {
            if (route.path.split('/').length > 2) {
                return RouteLocation.BlogPost
            } else {
                return RouteLocation.Blog
            }
        } else {
            return RouteLocation.Unknown
        }
    }
})

let easter_egg_enabled = ref(false)

function easter_egg() {
    if (easter_egg_enabled.value) return
    easter_egg_enabled.value = true
    setTimeout(() => {
        console.log('adzazd')
        easter_egg_enabled.value = false
    }, 500)
}
</script>