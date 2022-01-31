<template lang="pug">
    include ../../tools/mixins.pug
    +b.radio-boolean
        +e.value.radio(
            :class="{'active': value}"
            v-on:click="change(true)"
        ) Yes#[i(v-if="option") , ] #[span(v-if="option") {{option}}]
        +e.value.radio(
            :class="{'active': !value}"
            v-on:click="change(false)"
        ) No
</template>

<script>
    export default {
        props: ['option', 'value'],
        methods: {
            change(value){
                this.$emit('change', value);
            }
        }

    }
</script>