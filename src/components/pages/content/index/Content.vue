<template lang="pug">
    include ../../../../tools/mixins.pug
    div
        header-component
        mobile-message-component(
            v-if="deviceSize.mobile"
        )
        layout-component(
            v-if="!deviceSize.mobile"
        )
        footer-component
</template>

<script>
    import Header from '../../../sections/Header.vue'
    import MobileMessage from '../../../sections/MobileMessage.vue'
    import Layout from '../../../sections/Layout.vue'
    import Footer from '../../../sections/Footer.vue'

    import {deviceSize} from '../../../../mixins/frontEnd/utility/deviceSize'

    export default {
        mixins: [deviceSize],
        data() {
            return {

            }
        },
        mounted(){
        },
        methods: {
        },
        components: {
            'header-component': Header,
            'layout-component': Layout,
            'footer-component': Footer,
            'mobile-message-component': MobileMessage,
        }
    };
</script>