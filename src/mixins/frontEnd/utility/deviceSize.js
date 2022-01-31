export const deviceSize = {
    data(){
        return{
            deviceSize: {
                mobile: false,
                tablet: false,
                desktop: true
            }
        }
    },
    mounted(){
        this.getDeviceSize();
        window.addEventListener('resize',this.getDeviceSize)
    },
    destroyed(){
        window.removeEventListener('resize',this.getDeviceSize)
    },
    methods: {
        getDeviceSize(){
            if(typeof window !== 'undefined') {
                if(window.innerWidth < 1199) {
                    this.deviceSize.mobile = false;
                    this.deviceSize.tablet = false;
                    this.deviceSize.desktop = false;
                    if(window.innerWidth < 640){
                        this.deviceSize.mobile = true;
                    } else  {
                        this.deviceSize.tablet = true;
                    }
                } else {
                    this.deviceSize.mobile = false;
                    this.deviceSize.tablet = false;
                    this.deviceSize.desktop = true;
                }
            }
        }
    }
}