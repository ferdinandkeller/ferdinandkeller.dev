<template>
    <pre><code v-html="code_html" /></pre>
</template>

<script lang="ts" setup>
import hljs from 'highlight.js'
import 'highlight.js/styles/base16/black-metal-dark-funeral.css'

const props = defineProps({
    code: {
        type: String,
        default: ''
    },
    language: {
        type: String,
        default: null
    },
    filename: {
        type: String,
        default: null
    },
    highlights: {
        type: Array as () => number[],
        default: () => []
    },
    meta: {
        type: String,
        default: null
    }
})

let code_html = props.language !== null ? hljs.highlight(props.code, { language: props.language }).value : props.code
</script>

<style lang="scss">
pre {
    margin: 0 4em;
    padding: 1em 1.5em;
    border: solid 2px rgb(30, 30, 30);
    border-radius: 5px;
}

code {
    white-space: pre;
}
</style>
