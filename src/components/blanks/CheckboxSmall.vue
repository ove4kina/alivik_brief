<template lang="pug">
    include ../../tools/mixins.pug

    +b.checkbox-small(
        :class="{'active': active}"
        v-on:click="$emit('toggleCheckbox')"
    )
        +e.value
        +e.name {{name}}#[span(v-if="price") ,]
        +e.price {{price}}
</template>

<script>

    export default {
        props: ['active','name','price'],
        data(){
            return {

            }
        },
        methods: {
        }
    }
</script>
