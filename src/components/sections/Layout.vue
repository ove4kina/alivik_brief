<template lang="pug">
    include ../../tools/mixins.pug
    +b.layout
        +e.container.container
            +e.title.title(
                v-if="!lastStep"
                :class="{'hide': tabs.activeIndex === 3}"
            ) Fill the brief
            //@changeTab="changeTab"
            +e.TABS-COMPONENT.tabs(
                v-if="!lastStep"
                :class="{'hide': tabs.activeIndex === 3}"
                :activeTab="tabs.activeIndex"
            )
            +e.TRANSITION-GROUP.steps(
                tag="div"
                :name="animation.name"
                :class="{'blur': scrolling}"
            )
                +e.GENERAL-INFORMATION-COMPONENT.step.move-item(
                    v-if="tabs.activeIndex === 0"
                    :class="{'active': tabs.activeIndex === 0}"
                    :packages="generalInformation.packages"
                    :input="generalInformation.input"
                    @changeActivePackageIndex="changeActivePackageIndex"
                    @changeInput="changeInputProjectName"
                    :key="'general'"
                )
                +e.ROOM-INFORMATION-COMPONENT.step.move-item(
                    v-if="tabs.activeIndex === 1"
                    :class="{'active': tabs.activeIndex === 1}"
                    :index="generalInformation.packages.activeIndex"
                    :radioStyles="roomInformation.radioStyles"
                    :radioTypes="roomInformation.radioTypes"
                    :checkboxes="roomInformation.checkboxes"
                    :textarea="roomInformation.textarea"

                    :hashId="hashId"
                    @radioChange="radioChange"
                    @toggleCheckbox="toggleCheckbox"
                    @changeTextareaComment="changeTextareaComment"
                    :key="'room'"
                )
                +e.PRODUCT-INFORMATION-COMPONENT.step.move-item(
                    v-if="tabs.activeIndex === 2"
                    :class="{'active': tabs.activeIndex === 2}"
                    :products="productInformation.products"
                    :options="productInformation.options"
                    :currentPlan="generalInformation.packages.activeIndex"
                    :hashId="hashId"
                    @changeOption="changeProductMaterialOption"
                    @setScanOption="setProductMaterailScanOption"
                    @changeColor="changeProductMaterialColor"
                    @changeMaterialName="changeProductMaterialName"
                    @addNextPart="addNextPart"
                    @removeNextPart="removeNextPart"
                    @changeType="changeProductType"
                    @toggleData="toggleProductData"
                    @chooseVisual="chooseProductVisual"
                    @chooseSize="chooseProductSize"
                    @changeName="changeProductName"
                    @changeComment="changeProductComment"
                    @changeFunctionsCheckbox="changeProductFunctionsCheckbox"
                    @changeArvrmodelCheckbox="changeProductArvrmodelCheckbox"
                    @toggleCheckboxFunctions="toggleProductCheckboxFunctions"
                    @addProduct="addProduct"
                    :key="'product'"
                )
                +e.FORM-COMPONENT.step.move-item(
                    v-if="tabs.activeIndex === 3"
                    :inputs="formStep.input"
                    :stage="formStep.stage"
                    :class="{'active': tabs.activeIndex === 3}"
                    @changeInput="changeFormInputs"
                    @send="send"
                    @back="changeStep('prev')"
                    :key="'form'"
                )
            +e.INVOICE-COMPONENT.invoice(
                v-if="deviceSize.desktop"
                :package="generalInformation.packages"
                :radioStyles="roomInformation.radioStyles"
                :radioTypes="roomInformation.radioTypes"
                :products="invoiceProducts(productInformation.products)"
                :total="total"
                :class="{'active': showInvoice}"
            )
            +e.navigation(
                :class="{'blur': scrolling && deviceSize.desktop}"
                v-if="tabs.activeIndex !== 3 || !deviceSize.desktop"
            )
                +e.button--prev.button--primary.--border-gray(
                    :class="{'button--square button--arrow':deviceSize.desktop, 'hide': tabs.activeIndex === 0}"
                    v-on:click="changeStep('prev')"
                ) Previous step
                +e.total(
                    v-if="!deviceSize.desktop"
                )
                    span Total price
                    p {{ total }}€
                +e.button--add.button--primary.--border-gray.--icon.--icon-plus(
                    :class="{'hide': tabs.activeIndex !== 2}"
                    v-on:click="addProduct"
                )
                    span {{ generalInformation.packages.activeIndex === 0 ? 'Add next product' : 'Add product for this room' }}
                +e.button--next.button--primary.--red(
                    :class="{'disabled': disableNext}"
                    v-on:click="changeStep('next')"
                ) Next step
</template>

<script>
    import Tabs from '../blanks/Tabs.vue'
    import {tabsParentLogic} from '../../mixins/frontEnd/blanks/tabsParentLogic'

    import GeneralInformation from '../sections/GeneralInformation.vue'
    import {generalInformation} from "../../mixins/frontEnd/sections/generalInformation";

    import RoomInformation from '../sections/RoomInformation.vue'
    import {roomInformation} from '../../mixins/frontEnd/sections/roomInformation.js'

    import ProductInformation from '../sections/ProductsInformation.vue'
    import {productInformation} from '../../mixins/frontEnd/sections/productInformation'

    import Form from '../sections/Form.vue'
    import {form} from '../../mixins/frontEnd/sections/form'

    import Invoice from '../sections/Invoice.vue'
    import {invoice} from "../../mixins/frontEnd/sections/invoice";

    import {layoutLogic} from '../../mixins/frontEnd/blanks/layoutLogic'

    import {radioParentLogic} from '../../mixins/frontEnd/blanks/radioParentLogic'
    import {deviceSize} from '../../mixins/frontEnd/utility/deviceSize'

    export default {
        mixins: [
            layoutLogic,
            tabsParentLogic,
            generalInformation,
            roomInformation,
            radioParentLogic,
            deviceSize,
            invoice,
            productInformation,
            form
        ],
        data() {
            let date = new Date();
            return {
              hashId: date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() + date.getHours() + date.getMinutes() + date.getMilliseconds()
            }
        },
        components: {
            'tabs-component': Tabs,
            'general-information-component': GeneralInformation,
            'room-information-component': RoomInformation,
            'product-information-component': ProductInformation,
            'form-component': Form,
            'invoice-component': Invoice,
        }
    }
</script>