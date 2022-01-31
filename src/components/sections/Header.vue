<template lang="pug">
    include ../../tools/mixins.pug
    +b.HEADER.header
        +e.container.container
            +e.A(
                href="https://start.alivik.com/"
            ).logo
                img(src="/public/images/header/logo.svg")
</template>

<script>
    export default {
    }
</script>
