import animateScrollTo from 'animated-scroll-to';
export const layoutLogic = {
    data() {
        return {
            lastStep: false,
            scrolling: false,
            animation: {
                name: 'move-right'
            }
        }
    },
    methods: {
        changeStep(direction) {
            this.scrolling = true;
            animateScrollTo(
                0,
                {
                    easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 ,
                    speed: 500,
                }
            ).then(hasScrolledToPosition => {

                setTimeout(()=>{
                    this.scrolling = false;
                },300);

                this.animation.name = direction === 'next' ? 'move-right' : 'move-left'


                if(
                    direction === 'next' &&
                    this.tabs.activeIndex === 0 &&
                    this.generalInformation.packages.activeIndex === 0
                ) {
                    this.tabs.activeIndex = 2;
                    return;
                }

                if(
                    direction === 'prev' &&
                    this.tabs.activeIndex === 2 &&
                    this.generalInformation.packages.activeIndex === 0
                ) {
                    this.tabs.activeIndex = 0;
                    return;
                }

                switch (direction) {
                    case 'prev':
                        if (this.tabs.activeIndex !== 0) {
                            this.tabs.activeIndex--;
                        }
                        break;
                    case 'next':
                        this.tabs.activeIndex++;
                        setTimeout(()=>{
                            this.lastStep = this.tabs.activeIndex === 3
                        },500);
                        break;
                }
            });

        },
    },
    computed: {
        disableNext() {
            switch (this.tabs.activeIndex) {
                case 0:
                    return this.generalInformation.packages.activeIndex === null || this.generalInformation.input.value.length === 0;
                case 1:
                    return this.roomInformation.radioStyles.activeRadio === null ||
                        this.roomInformation.radioTypes.activeRadio === null;
                        // ||this.roomInformation.checkboxes.active.length === 0;
                case 2:
                    return false;
                case 3:
                    return true
            }
        }
    }
};