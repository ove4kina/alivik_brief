export const radioParentLogic = {
    data(){
        return {

        }
    },
    methods: {
        radioChange(active){
            this[active.object][active.name].activeRadio = active.index;
        }
    }
}