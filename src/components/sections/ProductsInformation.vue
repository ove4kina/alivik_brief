<template lang="pug">
    include ../../tools/mixins.pug
    +b.step
        template(
            v-for="(product,indexProduct) in products"
        )
            +e.title Product #[span #]{{ indexProduct + 1 }}
            +e.options
                +e.option
                    +e.text.text
                        p.bold Choose the type of product
                        p In this category we will save your model in our databank and you could reuse it
                    +e.line
                        +e.list--nowrap
                            +e.card--product.card-product__(
                                v-for="(productType) in options.products"
                                :class="{'active': productType.name === product.type}"
                                v-on:click="changeType(productType.name,indexProduct)"
                            )
                                +e.image
                                    v-lazy-image(:src="'/public/images/product/' + productType.avatar")
                                +e.name {{productType.name}}
                +e.option
                    +e.text.text
                        p.bold General information #[span *]
                        p If you don’t know the subcategory of product skip this
                    +e.line
                        +e.INPUT-COMPONENT.input(
                            :value="product.name.value"
                            :placeholder="'Product name'"
                            @change="$emit('changeName',{ value: $event, indexProduct: indexProduct })"
                        )
                +e.option
                    +e.text.text
                        p.bold Which data do you have?
                        p You could choose more than one option
                    +e.line(
                        v-for="(data,indexData) in options.data"
                    )
                        +e.UPLOAD-COMPONENT(
                            :active="isDataActive(data.id,product.data)"
                            :key="indexData"
                            :name="data.name"
                            @toggle="toggleData(indexProduct,data.id)"
                            @upload="uploadPointFiles($event,indexProduct)"
                        ).upload
                +e.option
                    +e.text.text
                        p.bold Which visualisation form more suitable for your product?
                    +e.line
                        +e.list--nowrap
                            +e.card--visual.card-visual__(
                                v-on:click="chooseVisual(indexProduct,1)"
                                :class="{'active': product.visual.value === 1}"
                            )
                                +e.image
                                    img(:src="'/public/images/visual/' + product.type.toLowerCase() + '/basic.svg'")
                                +e.name Basic geometric forms (without wrinkles)
                            +e.card--visual.card-visual__(
                                v-on:click="chooseVisual(indexProduct,2)"
                                :class="{'active': product.visual.value === 2}"
                            )
                                +e.image
                                    img(:src="'/public/images/visual/' + product.type.toLowerCase() + '/organic.svg'")
                                +e.name Blend of geometric and organic forms
                            +e.card--visual.card-visual__(
                                v-on:click="chooseVisual(indexProduct,3)"
                                :class="{'active': product.visual.value === 3}"
                            )
                                +e.image
                                    img(:src="'/public/images/visual/' + product.type.toLowerCase() + '/blend.svg'")
                                +e.name Organic forms and soft furnishing
                +e.option(
                    v-if="product.type !== 'Chair'"
                )
                    +e.text.text
                        p.bold What the size of your product?
                    +e.line
                        +e.list--nowrap
                            +e.card--visual.card-visual__(
                                v-on:click="chooseSize(indexProduct,1)"
                                :class="{'active': product.size.value === 1}"
                            )
                                +e.image
                                    img(:src="'/public/images/visual/' + product.type.toLowerCase() + '/small.svg'")
                                +e.name--big-offset Small
                            +e.card--visual.card-visual__(
                                v-on:click="chooseSize(indexProduct,2)"
                                :class="{'active': product.size.value === 2}"
                            )
                                +e.image
                                    img(:src="'/public/images/visual/' + product.type.toLowerCase() + '/medium.svg'")
                                +e.name--big-offset Medium
                            +e.card--visual.card-visual__(
                                v-on:click="chooseSize(indexProduct,3)"
                                :class="{'active': product.size.value === 3}"
                            )
                                +e.image
                                    img(:src="'/public/images/visual/' + product.type.toLowerCase() + '/large.svg'")
                                +e.name--big-offset Big / X-Large
                +e.option(
                    v-if="product.type !== 'Storage'"
                )
                    +e.text.text
                        p.bold Do you need to show functions of the product?
                        p For example you need one render with sofa’s folding mechanism
                    +e.line
                        +e.RADIO-BOOLEAN-COMPONENT(
                            :value="product.functions.value"
                            @change="changeFunctionsCheckbox(indexProduct)"
                        ).radio-boolean
                    +e.line--big-offset(
                        v-if="product.functions.value"
                    )
                        +e.CHECKBOX-SMALL-COMPONENT.checkbox-small--inline(
                            v-for="(option,optionIndex) in productFunctions(product.type,options.functions).options"
                            :key="optionIndex"
                            :name="option.name"
                            :price="'+ ' + option.price + ' €'"
                            :active="product.functions.options.includes(option.id)"
                            v-on:click.native="toggleCheckboxFunctions(indexProduct,option.id)"
                        )
                +e.option(
                    v-if="product.materialsSelect.length > 0"
                )
                    +e.text.text
                        p.bold Add materials to parts of the product
                    +e.line
                        +e.SELECT-COMPONENT.select(
                            v-for="(material, indexMaterial) in product.materials"
                            :key="indexMaterial"
                            :index="indexMaterial"
                            :activeSelect="indexMaterial === materials.materialIndex"
                            :activeColor="indexMaterial === materials.colorIndex"
                            :options="productMaterialOptions(product.materialsSelect,material)"
                            :material="productMaterialValue(product.materialsSelect,material)"
                            :value="material"
                            :removable="!material.disabled"
                            :placeholder="material.disabled ? 'Choose material' : 'Part name'"
                            @closeSelect="closeMaterialSelect"
                            @toggleSelect="toggleMaterialSelect(indexMaterial)"
                            @toggleColor="toggleMaterialColor(indexMaterial)"
                            @changeOption="$emit('changeOption', {value: $event, indexProduct: indexProduct, indexMaterial: indexMaterial})"
                            @setScanOption="$emit('setScanOption', {indexProduct: indexProduct, indexMaterial: indexMaterial})"
                            @changeName="$emit('changeMaterialName',{value: $event, indexProduct: indexProduct, indexMaterial: indexMaterial})"
                            @changeColor="changeColor($event,indexProduct,indexMaterial)"
                            @delete="$emit('removeNextPart',{indexProduct: indexProduct, indexMaterial: indexMaterial})"
                        )

                        <!--                        +e.SELECT-COMPONENT.select(-->
                        <!--                            v-for="(material, indexMaterial) in product.materialsSelect"-->
                        <!--                            :key="indexMaterial"-->
                        <!--                            :index="indexMaterial"-->
                        <!--                            :material="material"-->
                        <!--                            :activeSelect="indexMaterial === materials.materialIndex"-->
                        <!--                            :activeColor="indexMaterial === materials.colorIndex"-->
                        <!--                            :options="productMaterialOptions(material.options)"-->
                        <!--                            :value="productMaterialValue(product.materials,material)"-->

                        <!--                            :placeholder="'Choose material'"-->
                        <!--                            @toggleSelect="toggleMaterialSelect(indexMaterial)"-->
                        <!--                            @toggleColor="toggleMaterialColor(indexMaterial)"-->
                        <!--                            @changeOption="$emit('changeOption', {value: $event, indexProduct: indexProduct, indexMaterial: indexMaterial})"-->
                        <!--                            @setScanOption="$emit('setScanOption', {indexProduct: indexProduct, indexMaterial: indexMaterial})"-->
                        <!--                            @changeColor="changeColor($event,indexProduct,indexMaterial)"-->
                        <!--                        )-->

                        +e.BUTTON.button--option.button__.--primary.--border-gray(
                            v-on:click="$emit('addNextPart',{indexProduct: indexProduct})"
                        ) Add next part
                +e.option
                    +e.text.text
                        p.bold Upload your references and moods
                        p If you have references for white sweeps, we will match your visualisation on them
                    +e.line
                        +e.DROPZONE-COMPONENT.dropzone(
                            :id="'references' + indexProduct"
                            :url="'/dropzone-product?hash='+ hashId + '&product=' + indexProduct"
                        )
                +e.option
                    +e.text.text
                        p.bold Write your comment about product
                        p If you have references for white sweeps, please upload
                    +e.line
                        +e.TEXTAREA-COMPONENT.textarea(
                            :value="product.comment"
                            :placeholder="'Type here'"
                            @change="$emit('changeComment',{ value: $event, indexProduct: indexProduct })"
                        )
                +e.option
                    +e.text.text
                        p.bold AR/VR ready model
                    +e.line
                        +e.RADIO-BOOLEAN-COMPONENT.radio-boolean(
                            :value="product.arvrmodel"
                            @change="changeArvrmodelCheckbox(indexProduct)"
                        )
        +e.button--add.button--primary.--border-gray.--icon.--icon-plus(
            v-on:click="addProduct"
        )
            span {{ parseInt(currentPlan,10) === 0 ? 'Add next product' : 'Add product for this room' }}
</template>

<script>
    import axios from 'axios';

    import Input from '../blanks/Input.vue'
    import Select from '../blanks/Select.vue'
    import Upload from '../blanks/Upload.vue'
    import RadioBoolean from '../blanks/RadioBoolean.vue'
    import Dropzone from '../blanks/Dropzone.vue'
    import Textarea from '../blanks/Textarea.vue'
    import CheckboxSmall from '../blanks/CheckboxSmall.vue'

    import VLazyImage from "v-lazy-image";

    export default {
        props: ['products','options','hashId','currentPlan'],
        data() {
          return {
              materials: {
                  materialIndex: null,
                  colorIndex: null
              }
          }
        },
        methods: {
            uploadPointFiles(data, indexProduct) {
                data.files.map((file) => {
                    let formData = new FormData();
                    formData.append('file', file);
                    axios.post('/product-point?hash=' + this.hashId + '&product=' + indexProduct, formData)
                        .then((res) => {

                        }).catch((err) =>{

                        });
                })
            },

            addProduct() {
                this.$emit('addProduct');
            },
            changeColor(data,indexProduct,indexMaterial) {
                // this.materials.colorIndex = null;
                this.$emit('changeColor', {value: data, indexProduct: indexProduct, indexMaterial: indexMaterial})
            },

            productMaterialValue(materials,material) {
                let result = null;

                materials.map((m) => {
                    if(material.type === m.input.value) {
                        result = m;
                    }
                });

                return result;
            },
            // productMaterialValue(materials,material) {
            //     let result = null;
            //     materials.map((m) => {
            //         if(m.type === material.input.value) {
            //             result = m;
            //         }
            //     });
            //
            //     return result;
            // },

            closeMaterialSelect(){
                this.materials.materialIndex = null;
            },
            toggleMaterialSelect(index) {
                this.materials.colorIndex = null;
                if(index === this.materials.materialIndex) {
                    this.materials.materialIndex = null;
                } else {
                    this.materials.materialIndex = index;
                }
            },
            toggleMaterialColor(index) {
                this.materials.materialIndex = null;
                if(index === this.materials.colorIndex) {
                    this.materials.colorIndex = null;
                } else {
                    this.materials.colorIndex = index;
                }
            },

            changeType(type,index) {
                this.$emit('changeType',{type: type, index: index});
            },
            toggleData(indexProduct,dataId) {
                this.$emit('toggleData',{ indexProduct: indexProduct, dataId: dataId })
            },
            isDataActive(id,values) {
                let active = false;
                values.map((value) => {
                    if(id === value.id) {
                        active = true;
                    }
                });
                return active;
            },
            chooseVisual(indexProduct,visualId) {
                this.$emit('chooseVisual',{ id: visualId, indexProduct: indexProduct });
            },
            chooseSize(indexProduct,sizeId) {
                this.$emit('chooseSize',{ id: sizeId, indexProduct: indexProduct });
            },

            productFunctions(type,functions) {
                let result = [];
                functions.map((f) => {
                    if(type === f.type) {
                        result = f;
                    }
                });
                return result;
            },

            changeFunctionsCheckbox(indexProduct) {
                this.$emit('changeFunctionsCheckbox',{ indexProduct: indexProduct });
            },
            changeArvrmodelCheckbox(indexProduct) {
                this.$emit('changeArvrmodelCheckbox',{ indexProduct: indexProduct });
            },

            toggleCheckboxFunctions(indexProduct,id) {
                this.$emit('toggleCheckboxFunctions',{indexProduct: indexProduct, id: id});
            },

            productMaterialOptions(options,material) {
                let result = [],
                    optArray = [];

                if(material.disabled) {
                    options.map((option) => {
                        if(option.input.value === material.type) {
                            optArray = option.options;
                        }
                    });

                    optArray.map((option) => {
                        this.options.materialTypes.map((typeOption) => {
                            if(option.name === typeOption.name) {
                                result.push({
                                    name: typeOption.name,
                                    options: typeOption.options
                                });
                            }
                        });
                    });
                } else {
                    this.options.materialTypes.map((typeOption) => {
                        result.push({
                            name: typeOption.name,
                            options: typeOption.options
                        });
                    });
                }
                return result;
            },

            // productMaterialOptions(options) {
            //     let result = [];
            //     options.map((option) => {
            //         this.options.materialTypes.map((typeOption) => {
            //             if(option.name === typeOption.name) {
            //                 result.push({
            //                     name: option.name,
            //                     options: typeOption.options
            //                 });
            //             }
            //         })
            //     });
            //     return result;
            // }
            onClickOutSideSelect() {
                this.materials.materialIndex = null;
                this.materials.colorIndex = null;
            },
        },
        components: {
            'input-component': Input,
            'select-component': Select,
            'upload-component': Upload,
            'radio-boolean-component': RadioBoolean,
            'dropzone-component': Dropzone,
            'textarea-component': Textarea,
            'checkbox-small-component': CheckboxSmall,
            VLazyImage
        },
        watch: {
            'materials.materialIndex': function (newValue,oldIndex) {
                if(oldIndex === null){
                    document.addEventListener('click',this.onClickOutSideSelect)
                    document.addEventListener('keydown',this.onClickOutSideSelect)
                } else  {
                    document.removeEventListener('click',this.onClickOutSideSelect)
                    document.removeEventListener('keydown',this.onClickOutSideSelect)
                }

            },
            'materials.colorIndex': function (newValue,oldIndex) {
                if(oldIndex === null){
                    document.addEventListener('click',this.onClickOutSideSelect)
                    document.addEventListener('keydown',this.onClickOutSideSelect)
                } else  {
                    document.removeEventListener('click',this.onClickOutSideSelect)
                    document.removeEventListener('keydown',this.onClickOutSideSelect)
                }
            }
        }
    }
</script>