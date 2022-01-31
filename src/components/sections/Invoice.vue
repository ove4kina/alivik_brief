<template lang="pug">
    include ../../tools/mixins.pug
    +b.invoice(
        v-bar="{preventParentScroll: true, scrollThrottle: 30}"
    )
        +e.scroller(
            ref="scrollerInvoice"
            v-on:scroll="onScroll"
        )
            +e.title Work invoice
            +e.list
                +e.item--simple(
                    v-if="package.activeIndex !== null"
                )
                    span Package
                    p {{package.list[package.activeIndex].title}}
                +e.item--simple(
                    v-if="radioStyles.activeRadio !== null"
                )
                    span Room style
                    p {{radioStyles.list[radioStyles.activeRadio].name}}
                +e.item--simple(
                    v-if="radioTypes.activeRadio !== null"
                )
                    span Type of room
                    p {{radioTypes.list[radioTypes.activeRadio].name}}

                <!--            template(-->
                <!--                v-for="(product,indexProduct) in products"-->
                <!--            )-->
                <!--                +e.item-->
                <!--                    span Products-->
                <!--                    p {{ product.name === '' ? indexProduct + 1 : product.name }}-->
                <!--                +e.item-->
                <!--                    span Visualization form-->
                <!--                    p {{ product.visual }}-->
                <!--                +e.item(-->
                <!--                    v-if="product.type !== 'Chair'"-->
                <!--                )-->
                <!--                    span Size of product-->
                <!--                    p {{ product.size }}-->
                <!--                +e.item-->
                <!--                    span Additional-->
                <!--                    p.bold + {{ product.additional }} €-->

                +e.item--product(
                    v-for="(product,indexProduct) in products"
                )
                    span Product {{ product.name === '' ? indexProduct + 1 : product.name }}
                    p.bold + {{ product.additional }} €

        +e.total(
            :class="{'shadow': value.shadow}"
        )
            span Total price
            p {{value.total}} €

</template>

<script>
    import animateScrollTo from 'animated-scroll-to';
    import gsap from 'gsap';
    export default {
        props:['package','radioStyles','radioTypes','total','products'],
        data(){
            return{
                value: {
                    total: 0,
                    shadow: false
                }
            }
        },
        methods: {
            animateTotal(newValue){
                let value = this.value;
                gsap.to(value,0.3,
                    {
                        total: newValue,
                        onUpdate: () => {
                             this.value.total = parseInt(this.value.total,10);
                        }
                    }
                );
            },
            setShadowOnOverflow(){
                this.$nextTick(()=>{
                    this.value.shadow = this.$refs.scrollerInvoice.scrollHeight > Math.ceil(this.$refs.scrollerInvoice.getBoundingClientRect().height);
                    if(this.value.shadow){
                        setTimeout(()=>{
                            animateScrollTo(this.$refs.scrollerInvoice.scrollHeight, {elementToScroll: this.$refs.scrollerInvoice, horizontal: false,speed: 100});
                        })
                    }
                })
            },
            onScroll(e){
                let target = e.target || e.srcElement;
                if(target.scrollTop >= Math.floor(target.scrollHeight - target.getBoundingClientRect().height) - 1) {
                    this.value.shadow = false;
                } else {
                    this.value.shadow = this.$refs.scrollerInvoice.scrollHeight > Math.ceil(this.$refs.scrollerInvoice.getBoundingClientRect().height);
                }
            }
        },
        watch: {
            total:{
                immediate: true,
                handler: 'animateTotal'
            },
            products(newValue,oldValue) {
                if(newValue.length !== oldValue.length) {
                    this.setShadowOnOverflow()
                }
            }
        }
    }
</script>
