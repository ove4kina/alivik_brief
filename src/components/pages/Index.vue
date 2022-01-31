<template lang="pug">
    content-component
</template>

<script>
    import Content from '../pages/content/index/Content.vue'
    export default {
        data() {
            return {};
        },
        title() {
          return 'Brief | Alivik';
        },
        components: {
            'content-component': Content,
        }
    };
</script>