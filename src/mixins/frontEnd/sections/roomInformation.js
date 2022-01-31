export const roomInformation = {
    data(){
        return {
            roomInformation: {
                radioStyles: {
                    activeRadio: null,
                    list: [
                        {
                            name: 'Modern'
                        },
                        {
                            name: 'Industrial'
                        },
                        {
                            name: 'Classic'
                        },
                        {
                            name: 'Scandinavian'
                        },
                        {
                            name: 'Landhouse'
                        }
                    ]
                },
                radioTypes: {
                    activeRadio: null,
                    list: [
                        {
                            name: 'Living room'
                        },
                        {
                            name: 'Dinning room'
                        },
                        {
                            name: 'Bedroom'
                        },
                        {
                            name: 'Kitchen'
                        },
                        {
                            name: 'Lobby'
                        },
                        {
                            name: 'Bathroom'
                        }
                    ]
                },
                checkboxes: {
                    active: [],
                    list: [
                        {
                            name: 'Cinemagraph loop (4 seconds)',
                            price: '+ 1800 €'
                        },
                        {
                            name: 'VR-experience with room',
                            price: '+ 9500 €'
                        },
                        {
                            name: 'Personal Stylist',
                            price: '+ 300 €'
                        },
                        {
                            name: 'Personal Architect',
                            price: '+ 500 €'
                        },
                        {
                            name: 'People shooting',
                            price: '+ price by request'
                        }
                    ]
                },
                textarea: {
                    value: '',
                    placeholder: 'Type here'
                }
            }
        }
    },
    methods: {
        toggleCheckbox(index){
            if(this.roomInformation.checkboxes.active.includes(index)) {
                for(let i = 0; i < this.roomInformation.checkboxes.active.length; i++) {
                    if(index === this.roomInformation.checkboxes.active[i]){
                        this.roomInformation.checkboxes.active.splice(i, 1);
                    }
                }
            } else {
                this.roomInformation.checkboxes.active.push(index);
            }
        },
        changeTextareaComment(data) {
            this.roomInformation.textarea.value = data.value
        }
    }
}