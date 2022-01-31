<template lang="pug">
    include ../../tools/mixins.pug

    +b.select(
        v-on:click.stop="true === true"
        :class="{'disabled': value.disabled, 'active': activeSelect, 'selected': value.value !== null,'active-color-picker': activeColor}"
    )
        +e.index {{ index + 1 }}

        template(
            v-if="value.disabled"
        )
            +e.INPUT-COMPONENT.input(
                :value="material.input.value"
                :placeholder="placeholder"
                :disabled="value.disabled"
            )
        template(
            v-else
        )
            +e.INPUT-COMPONENT.input(
                :value="value.input.value"
                :placeholder="placeholder"
                :disabled="value.disabled"
                @change="changeName"
            )

        +e.wrapper(
            @click="$emit('toggleSelect')"
        )
            +e.value
                template(
                    v-if="value.value === null && !value.scan"
                )
                    p {{ placeholder }}
                template(
                    v-else-if="value.value === null && value.scan"
                )
                    p Scan new material, #[span + 100 €]
                template(
                    v-else
                )
                    img(
                        :src="materialValue(value.value)"
                    )
                    p {{ materialSection(value.value) }}
            +e.list
                +e.scroller(
                    v-bar="{preventParentScroll: true,scrollThrottle: 30}"
                )
                    div
                        +e.section(
                            v-for="(section, indexSection) in options"
                        )
                            +e.title {{ section.name }}
                            +e.items
                                +e.item(
                                    v-for="(item,index) in section.options"
                                    @click="changeOption(item.id)"
                                )
                                    img(
                                        :src="item.src"
                                    )
                +e.button.button__.--primary.--border-gray(
                    @click="$emit('setScanOption')"
                )
                    p Scan new material, #[span + 100 €]
        +e.color
            +e.circle(
                @click="$emit('toggleColor')"
                :style="{'background-color': value.color}"
            )
            +e.CHROME-PICKER-COMPONENT.color-picker(
                v-if="init"
                v-model="color"
                @input="$emit('changeColor', color.hex)"
            )
        +e.BUTTON.delete(
            v-if="removable"
            v-on:click="$emit('delete')"
        )

</template>

<script>
    import Input from '../blanks/Input.vue'
    import { Chrome } from 'vue-color'

    import {onEscHandler} from "../../mixins/frontEnd/utility/onEscHandler";

    export default {
        props: ['material','placeholder','index','options','activeSelect','activeColor','value','removable'],
        mixins: [onEscHandler],
        data(){
            return {
                color: '',
                init: false,
            }
        },
        mounted(){
            this.init = true;
        },
        methods: {
            changeName(data) {
                this.$emit('changeName',data);
            },
            materialValue(id) {
                let result = null;
                this.options.map((section) => {
                    section.options.map((option) => {
                        if(option.id === id) {
                            result = option.src;
                        }
                    })
                });
                return result;
            },
            materialSection(id) {
                let result = null;
                this.options.map((section) => {
                    section.options.map((option) => {
                        if(option.id === id) {
                            result = section.name;
                        }
                    })
                });
                return result;
            },
            changeOption(id){
                this.$emit('changeOption', {id: id});
                this.$nextTick(()=>{
                    this.$emit('closeSelect');
                    this.$emit('toggleColor');
                })
            }
        },
        components: {
            'input-component': Input,
            'chrome-picker-component': Chrome,
        },
    }
</script>
