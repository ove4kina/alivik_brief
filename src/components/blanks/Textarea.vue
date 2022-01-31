<template lang="pug">
    include ../../tools/mixins.pug

    +b.textarea
        textarea(
            :value="value"
            :placeholder="placeholder"
            @input="onChange"
        )
</template>

<script>

    export default {
        props: ['value','placeholder'],
        methods: {
            onChange(e) {
                this.$emit('change',{value: e.target.value})
            }
        }
    }
</script>
