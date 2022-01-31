<template lang="pug">
    include ../../tools/mixins.pug

    +b.input(
        :class="{'disabled': disabled, 'required': required, 'error': error}"
    )
        input(
            :value="value"
            :placeholder="placeholder"
            @input="change"
            ref="input"
        )
</template>

<script>

    export default {
        props: ['value','placeholder','disabled','required','error', 'focusOnMount'],
        data(){
            return {

            }
        },
        methods: {
            change(e){
                let target = e.target || e.srcElement;
                this.$emit('change', target.value);
            }
        },
        mounted(){
            if(this.focusOnMount){
                this.$refs.input.focus();
            }
        }
    }
</script>
