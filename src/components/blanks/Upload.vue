<template lang="pug">
    include ../../tools/mixins.pug
    +b.upload(
        :class="{'active': active, 'error': error, 'loading': preloader.animation, 'show-loading': preloader.show}"
    )
        +e.section--checkbox(
            v-on:click="toggle"
        )
            span
            p {{ name }}
        +e.section--value
            template(
                v-if="loading"
            )
                p Uploading
            template(
                v-else
            )
                p Upload your files
            input(
                type="file"
                multiple
                @change="onUploadFiles"
            )
            +e.loading
                svg(xmlns="http://www.w3.org/2000/svg" width="400" height="87.14" viewBox="0 0 400 87.14")
                    rect(
                        x="0.57"
                        y="0.57"
                        width="400"
                        height="87.14"
                    )
            +e.error File {{file}} is too large
</template>

<script>
    export default {
        props: ['name', 'active', 'loading'],
        data(){
            return {
                error: false,
                file: '',
                preloader: {
                    show:false,
                    animation: false
                }
            }
        },
        methods: {
            toggle() {
                this.$emit('toggle')
            },
            onUploadFiles(event) {
                this.error = false;
                let files = event.target.files,
                    result = [];
                for (let i = 0; i < files.length; i++) {
                    if(files[i].size > 300000000){
                        this.file = files[i].name;
                        this.error = true;
                        continue;
                    }
                    result.push(files[i])
                }
                if(result.length > 0) {
                    this.$emit('upload',{ files: result })
                }
            }
        },
        watch: {
            loading(newValue){
                if(newValue){
                    this.preloader.animation = true;
                    this.preloader.show = true;
                } else {
                    this.preloader.animation = false;
                    setTimeout(()=>{
                        this.preloader.show = false;
                    },300)
                }
            }
        }
    }
</script>

