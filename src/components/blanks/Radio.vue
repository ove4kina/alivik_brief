<template lang="pug">
    include ../../tools/mixins.pug

    +b.radio(
        :class="{'active': active}"
        @click="change"
    ) {{name}}
</template>

<script>

    export default {
        props: ['active','index','name'],
        data(){
            return {

            }
        },
        methods: {
            change(){
                this.$emit('radioChange', this.index)
            }
        }
    }
</script>
