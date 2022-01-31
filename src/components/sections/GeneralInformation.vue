<template lang="pug">
    include ../../tools/mixins.pug

    +b.step
        +e.options
            +e.option
                +e.text.text
                    p.bold Create new project #[span *]
                    p This name will help you to search results and work with order
                +e.line--small-offset
                    +e.INPUT-COMPONENT.input(
                        :value="input.name"
                        :placeholder="input.placeholder"
                        :focusOnMount="true"
                        @change="$emit('changeInput', $event)"
                    )
            +e.option
                +e.text.text
                    p.bold Choose your package #[span *]
                    p Which packet of visualization do you need?
                +e.line--small-offset
                    +e.list--nowrap
                        +e.card--package.card-package__(
                            v-for="(item,index) in packages.list"
                            v-on:click="changeActivePackageIndex(index)"
                            :class="{'active': packages.activeIndex === index}"
                        )
                            +e.image
                                v-lazy-image(
                                    :src="item.image"
                                )
                            +e.text
                                p.bold {{item.title}}
                                p {{item.description}}
</template>

<script>
    import Input from '../blanks/Input.vue'
    import VLazyImage from "v-lazy-image";
    export default {
        props: ['packages', 'input'],
        data(){
            return {

            }
        },
        methods: {
            changeActivePackageIndex(index){
                this.$emit('changeActivePackageIndex',index)
            }
        },
        components: {
            'input-component': Input,
            VLazyImage
        }
    }
</script>