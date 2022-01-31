export const tabsLogic = {
    data(){
        return {
            tabs: [
                {
                    text: 'General information'
                },
                {
                    text: 'Room information'
                },
                {
                    text: 'Products'
                }
            ]
        }
    },
    methods: {
        changeActiveTab(index){
            this.$emit('changeTab', index)
        }
    }
}