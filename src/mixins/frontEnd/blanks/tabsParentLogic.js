export const tabsParentLogic = {
    data(){
        return {
            tabs: {
                activeIndex: 0,
            }
        }
    },
    methods: {
        changeTab(index){
            this.tabs.activeIndex = index;
        }
    }
}