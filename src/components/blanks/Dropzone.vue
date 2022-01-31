<template lang="pug">
    include ../../tools/mixins.pug

    div(
        :class="{'dropzone': dropzone}"
        :id="id"
    )
        .dz-message Click or drop here your files
</template>

<script>
    export default {
        props:['id','url'],
        data() {
          return {
              dropzone: false
          }
        },
        mounted() {
            let myDropzone = new Dropzone("#" + this.id, { url: this.url, maxFilesize: 300});

            setTimeout(() => {
                this.dropzone = true;
            },100)
        }
    }
</script>

