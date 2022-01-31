<template lang="pug">
    include ../../tools/mixins.pug

    +b.tabs
        +e.item(
            v-for="(tab, index) in tabs"
            ref="items"
            :class="{'active': index === activeTab}"
            @click="changeActiveTab(index)"
        ) {{ tab.text }}
        +e.bar(
            :style="{'width': bar.width, 'left': bar.left}"
        )
</template>

<script>
    import {tabsLogic} from '../../mixins/frontEnd/blanks/tabsLogic.js'
    export default {
        props: ['activeTab'],
        mixins: [tabsLogic],
        data(){
            return {
                bar: {
                    width: null,
                    left: null
                }
            }
        },
        mounted(){
            // this.changeBarPosition(this.activeTab)
        },
        methods: {
            changeBarPosition(index){
                if(index < 3){
                    this.bar.width = `${this.$refs.items[index].getBoundingClientRect().width}px`;
                    this.bar.left = `${this.$refs.items[index].offsetLeft}px`;
                }

            }
        },
        watch: {
            activeTab(newIndex){
                this.changeBarPosition(newIndex)
            }
        }
    }
</script>
