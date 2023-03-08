<template lang="pug">
.blog
    ContentDoc.blog-content.spacer(:path="$route.path.substring('blog/'.length)")
        template(#not-found)
</template>

<style lang="scss">
.blog {
    .blog-content {
        display: flex;
        flex-direction: column;
        justify-content: center;

        &>*:not(:last-child) {
            margin-bottom: var(--paragraph-spacing);
        }
    }
}
</style>
