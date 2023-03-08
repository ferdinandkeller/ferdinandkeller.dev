<template>
    <div class="codeblock">
        <div v-if="props.language !== null" class="language">{{ props.language }}</div>
        <pre><code v-html="code_html" /></pre>
    </div>
</template>

<script lang="ts" setup>
import hljs from 'highlight.js/lib/common'
import 'highlight.js/styles/base16/black-metal-dark-funeral.css'
import generateId from '@/utils/generateId'

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

let code_html = useState(generateId(), () => {
    return props.language !== null ? hljs.highlight(props.code, { language: props.language }).value : props.code
})
</script>

<style lang="scss">
.codeblock {
    margin: 0 4em;
    padding: 1em 1.5em;
    border: solid 1.5px rgb(40, 40, 40);
    border-radius: 5px;
    background-color: #0e0e10;
    position: relative;

    .language {
        position: absolute;
        bottom: 0;
        right: 1em;
        font-size: 1.2rem;
        font-weight: 800;
        text-transform: uppercase;
        color: hsl(0, 0%, 30%);
        user-select: none;
        cursor: default;
    }
}

pre {
    white-space: pre-wrap;
    word-wrap: break-word;
}

code {}
</style>
