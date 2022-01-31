export const generalInformation = {
    data(){
        return {
            generalInformation: {
                packages: {
                    activeIndex: null,
                    list: [
                        {
                            image: '/public/images/package/1.jpg',
                            title: 'White Sweeps',
                            description: '5 x white sweeps renders, 3d-model, access to our material storage'
                        },
                        {
                            image: '/public/images/package/2.jpg',
                            title: 'Standard package',
                            description: 'One visualization of product in a room, close-up visualization, include white sweeps package'
                        },
                        {
                            image: '/public/images/package/3.jpg',
                            title: 'Premium package',
                            description: '2 × visualization of product in a room, 2 × close-up visualizations, include white sweeps and more options'
                        }
                    ]
                },
                input: {
                    value: '',
                    placeholder: 'Project name'
                }
            }
        }
    },
    methods:{
        changeActivePackageIndex(index){
            if(this.generalInformation.packages.activeIndex === index) {
                this.generalInformation.packages.activeIndex = null;
            } else {
                this.generalInformation.packages.activeIndex = index;
            }
        },
        changeInputProjectName(value){
            this.generalInformation.input.value = value;
        }
    },
    mounted() {
        let url = new URL(window.location.href),
            packageId = parseInt(url.searchParams.get('package'),10);
        if([0,1,2].includes(packageId)) {
            this.generalInformation.packages.activeIndex = packageId;
        }
    }
};