<template>
    <main>
        <NuxtLink to="/articles">back to Articles</NuxtLink>
        <ContentDoc :path="$route.path.substring('articles/'.length)">
            <template #not-found>
                <NotFound />
            </template>
        </ContentDoc>
    </main>
</template>
