<template>
    <div class="articles">
        <NuxtLink to="/">Home</NuxtLink>
        <p>List of all articles</p>
        <ContentNavigation v-slot="{ navigation }">
            <ul>
                <li v-for="link in navigation" :key="link._path">
                    <NuxtLink :to="'articles' + link._path">{{ link.title }}</NuxtLink>
                </li>
            </ul>
        </ContentNavigation>
    </div>
</template>