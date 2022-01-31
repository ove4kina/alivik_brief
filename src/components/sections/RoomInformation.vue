<template lang="pug">
    include ../../tools/mixins.pug

    +b.step
        +e.options
            +e.option
                +e.text.text
                    p.bold Which style of room we need to create? #[span *]
                    p Our Artists will suggest architecture in this style
                +e.line
                    +e.list--radio
                        +e.RADIO-COMPONENT.radio(
                            v-for="(radio,index) in radioStyles.list"
                            :key="index"
                            :name="radio.name"
                            :index="index"
                            :active="index === radioStyles.activeRadio"
                            @radioChange="$emit('radioChange', {index: $event, object: 'roomInformation', name: 'radioStyles'})"
                        )
            +e.option
                +e.text.text
                    p.bold Which type of room we need to create? #[span *]
                    p Our Artists will suggest architecture for this type of room
                +e.line
                    +e.list--radio
                        +e.RADIO-COMPONENT.radio(
                            v-for="(radio,index) in radioTypes.list"
                            :key="index"
                            :name="radio.name"
                            :index="index"
                            :active="index === radioTypes.activeRadio"
                            @radioChange="$emit('radioChange', {index: $event, object: 'roomInformation', name: 'radioTypes'})"
                        )
            +e.option
                +e.text.text
                    p.bold Upload your references and moods
                    p To create exact this atmosphere which you want, we need references and moods for look and feel
                +e.line
                    +e.DROPZONE-COMPONENT.dropzone(
                        :id="'room'"
                        :url="'/dropzone-room?hash=' + this.hashId"
                    )
            +e.option
                +e.text.text
                    p.bold Write your comment about room
                    p If you have any wishes or special terms of Room write here
                +e.line
                    +e.TEXTAREA-COMPONENT.textarea(
                        :value="textarea.value"
                        :placeholder="textarea.placeholder"
                        @change="changeTextarea"
                    )
            +e.option(
                v-if="parseInt(index,10) === 2"
            )
                +e.text.text
                    p.bold Additional features and experience with your product
                +e.line
                    +e.CHECKBOX-SMALL-COMPONENT.checkbox-small(
                        v-for="(checkbox,index) in checkboxes.list"
                        :key="index"
                        :name="checkbox.name"
                        :price="checkbox.price"
                        :active="checkboxes.active.includes(index)"
                        @toggleCheckbox="$emit('toggleCheckbox', index)"
                    )
</template>

<script>
    import Radio from '../blanks/Radio.vue'
    import Textarea from '../blanks/Textarea.vue'
    import CheckboxSmall from '../blanks/CheckboxSmall.vue'
    import Dropzone from '../blanks/Dropzone.vue'

    export default {
        props: ['index','radioStyles','radioTypes','checkboxes', 'textarea','hashId'],
        data() {
            return {

            }
        },
        methods: {
            changeTextarea(data) {
                this.$emit('changeTextareaComment',data);
            }
        },
        components: {
            'radio-component': Radio,
            'textarea-component': Textarea,
            'checkbox-small-component': CheckboxSmall,
            'dropzone-component': Dropzone,
        }
    }
</script>
