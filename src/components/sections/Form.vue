<template lang="pug">
    include ../../tools/mixins.pug

    +b.step
        +e.form.form__(
            :class="{'loading': stage.loading,'send': stage.send}"
        )
            +e.body
                +e.title.title Last step to start
                +e.text.text
                    p.bold Leave your contact details and we will share you access to alivik.com
                +e.INPUT-COMPONENT.input(
                    :value="inputs.name.value"
                    :placeholder="inputs.name.placeholder"
                    :required="true"
                    :error="inputs.name.error"
                    @change="$emit('changeInput', { value: $event, name: 'name'})"
                )
                +e.INPUT-COMPONENT.input(
                    :value="inputs.company.value"
                    :placeholder="inputs.company.placeholder"
                    @change="$emit('changeInput', { value: $event, name: 'company'})"
                )
                +e.INPUT-COMPONENT.input(
                    :value="inputs.phone.value"
                    :placeholder="inputs.phone.placeholder"
                    :required="true"
                    :error="inputs.phone.error"
                    @change="$emit('changeInput', { value: $event, name: 'phone'})"
                )
                +e.INPUT-COMPONENT.input(
                    :value="inputs.email.value"
                    :placeholder="inputs.email.placeholder"
                    :required="true"
                    :error="inputs.email.error"
                    @change="$emit('changeInput', { value: $event, name: 'email'})"
                )
                +e.buttons(
                    v-if="deviceSize.desktop"
                )
                    +e.BUTTON.button--prev.button--primary.--border-gray(
                        :class="{'button--square button--arrow':deviceSize.desktop}"
                        v-on:click="back"
                    ) Previous step
                    +e.BUTTON.button--send.button__.--red.--primary(
                        v-on:click="send"
                    ) Place an order
            +e.response
                +e.title.title Thanks for filling out our brief!
                +e.text.text
                    p.bold We will get in touch with you and will start your experience with alivik quickly.
            +e.preloader
                span
</template>

<script>

    import Input from '../blanks/Input.vue'
    import {deviceSize} from "../../mixins/frontEnd/utility/deviceSize";

    export default {
        mixins: [deviceSize],
        props: ['inputs','stage'],
        data(){
            return {

            }
        },
        methods: {
            send(){
                this.$emit('send');
            },
            back(){
                this.$emit('back');
            }
        },
        components: {
            'input-component': Input
        }
    }
</script>
