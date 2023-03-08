<template lang="pug">
.home
    h1 Hi, my name is Ferdinand

    p I'm a datascientist and AI engineer at #[NuxtLink(to="https://caregame.com" target="blank") CareGame]. I like to solve problems. I'm also a huge #[NuxtLink(to="https://www.rust-lang.org" target="blank") Rust] fan 🦀. Don't hesitate to contact me, even if it's just to say hi 👋.

    NuxtLink.read-blog-posts(to="/blog") read my blog posts
</template>

<style lang="scss" scoped>
.home {
    height: 100%;
    margin-top: 10rem;
    font-size: 1.8rem;
    padding: 0 5em;

    h1 {
        margin-bottom: 1em;
    }

    p {
        width: 60rem;
    }

    a {
        text-decoration: underline;
    }

    .read-blog-posts {
        font-style: italic;
    }
}
</style>
