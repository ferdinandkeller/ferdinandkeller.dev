<template>
    <div id="app">
        <div class="header-filler"></div>
        <header>
            <div class="navbar">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/articles">Articles</NuxtLink>
                <NuxtLink to="/">Resume</NuxtLink>
            </div>
        </header>

        <main>
            <slot />
        </main>

        <footer>
            <div class="note">
                <div class="line"></div>
                <div class="text"> designed & built <b>cookie free</b> by Ferdinand Keller</div>
            </div>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .header-filler {
        width: 100%;
        height: 6rem;
    }

    header {
        height: 6rem;
        padding: 0 3em;
        display: flex;
        justify-content: right;
        align-items: center;
        user-select: none;
        position: fixed;
        backdrop-filter: blur(8px) brightness(.5);
        width: 100%;
        top: 0;
        left: 0;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        z-index: 10;

        .navbar {
            display: flex;
            flex-direction: row;

            a {
                font-weight: 800;
                position: relative;

                &:not(:last-child) {
                    margin-right: 3em;
                }

                // &::after {
                //     content: "";
                //     position: absolute;
                //     --w: 10px;
                //     width: var(--w);
                //     left: calc(50% - var(--w) / 2);
                //     bottom: 0;
                //     height: 3px;
                //     background-color: white;
                //     border-radius: .2px;
                //     transition: width .2s ease-out, left .2s ease-out;
                // }

                &:hover {
                    cursor: pointer;

                    // &::after {
                    //     width: 100%;
                    //     left: 0;
                    // }
                }
            }
        }
    }

    main {
        flex-grow: 1;
        padding: 0 5em;
    }

    footer {
        display: flex;
        justify-content: right;
        font-size: 1.2rem;
        padding: 1em 2em;
        margin-top: 3em;

        .note {
            display: flex;
            flex-direction: row;
            align-items: center;

            .line {
                background-color: white;
                width: 15px;
                height: 2px;
                margin-right: 1em;
            }

            .text {}
        }
    }
}
</style>