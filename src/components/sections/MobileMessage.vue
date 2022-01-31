<template lang="pug">
    include ../../tools/mixins.pug
    +b.mobile-message
        +e.container.container
            p Please reconnect from computer or tablet to fill the brief
</template>

<script>
    export default {
        name: "MobileMessage"
    }
</script>

<style scoped>

</style>