<template>
    <div class="article">
        <NuxtLink to="/articles">back to Articles</NuxtLink>
        <ContentDoc class="article-content spacer" :path="$route.path.substring('articles/'.length)">
            <template #not-found>
                <NotFound />
            </template>
        </ContentDoc>
    </div>
</template>

<style lang="scss">
.article {
    .article-content {
        display: flex;
        flex-direction: column;
        justify-content: center;

        &>*:not(:last-child) {
            margin-bottom: var(--paragraph-spacing);
        }
    }
}
</style>