import axios from 'axios'

export const form = {
    data() {
        return {
            formStep: {
                input: {
                    name: {
                        value: '',
                        placeholder: 'Your name',
                        error: false
                    },
                    company: {
                        value: '',
                        placeholder: 'Company or brand name',
                    },
                    phone: {
                        value: '',
                        placeholder: 'Mobile phone',
                        error: false
                    },
                    email: {
                        value: '',
                        placeholder: 'E-mail',
                        error: false
                    }
                },
                stage: {
                    loading: false,
                    send: false
                }
            }
        }
    },
    methods: {
        changeFormInputs(event) {
            this.formStep.input[event.name].value = event.value;
            if (this.formStep.input[event.name].error) {
                this.formStep.input[event.name].error = false;
            }

        },
        validate(){
            this.formStep.input.name.error = this.formStep.input.name.value.length === 0;
            this.formStep.input.phone.error = this.formStep.input.phone.value.length === 0;
            this.formStep.input.email.error = this.formStep.input.email.value.length === 0;

            return !this.formStep.input.name.error && !this.formStep.input.phone.error && !this.formStep.input.email.error
        },

        getVisualNameById(id) {
            switch (id) {
                case 1:
                    return 'Basic';
                case 2:
                    return 'Blend';
                case 3:
                    return 'Organic';
            }
        },
        getSizeNameById(id) {
            switch (id) {
                case 1:
                    return 'small';
                case 2:
                    return 'medium';
                case 3:
                    return 'large';
            }
        },

        send() {
            if (this.validate()) {

                let packageName = '';
                switch (this.generalInformation.packages.activeIndex) {
                    case 0:
                        packageName = 'White Sweeps';
                        break;
                    case 1:
                        packageName = 'Standard package';
                        break;
                    case 2:
                        packageName = 'Premium package';
                        break;
                }

                let roomStyle = '',
                    roomType = '',
                    roomCheckboxes = [];
                this.roomInformation.radioStyles.list.map((st, index) => {
                    if (index === this.roomInformation.radioStyles.activeRadio) {
                        roomStyle = st.name
                    }
                });
                this.roomInformation.radioTypes.list.map((t, index) => {
                    if (index === this.roomInformation.radioTypes.activeRadio) {
                        roomType = t.name
                    }
                });
                this.roomInformation.checkboxes.list.map((t, index) => {
                    if (this.roomInformation.checkboxes.active.includes(index)) {
                        roomCheckboxes.push(t.name);
                    }
                });

                let products = [];
                this.productInformation.products.map((product) => {
                    let visualProduct = this.getVisualNameById(product.visual.value),
                        sizeProduct = this.getSizeNameById(product.size.value),
                        productMaterials = [];

                    product.materials.map((material) => {
                        // if (material.value !== null) {
                            let m = null;
                            this.productInformation.options.materialTypes.map((section) => {
                                section.options.map((option) => {
                                    if (parseInt(option.id, 10) === parseInt(material.value, 10)) {
                                        m = option.src;
                                    }
                                })
                            });

                            if(material.disabled) {
                                productMaterials.push({
                                    scan: material.scan,
                                    type: material.type,
                                    color: material.color,
                                    src: 'https://brief.alivik.com/' + m,
                                })
                            } else {
                                productMaterials.push({
                                    scan: material.scan,
                                    type: material.input.value,
                                    color: material.color,
                                    src: 'https://brief.alivik.com/' + m,
                                })
                            }
                        // }
                    });

                    let functions = [];
                    if(product.functions.value) {
                        this.productInformation.options.functions.map((section) => {
                            if(section.type === product.type) {
                                section.options.map((option) => {
                                    if (product.functions.options.includes(option.id)) {
                                        functions.push(option.name);
                                    }
                                })
                            }
                        });
                    }

                    products.push({
                        name: product.name.value,
                        functions: functions,
                        type: product.type,
                        visual: visualProduct,
                        size: sizeProduct,
                        comment: product.comment,
                        arvr: product.arvrmodel,
                        materials: productMaterials
                    });
                });

                this.formStep.stage.loading = true;

                axios.post('/send', {
                    hashId: this.hashId,
                    project: {
                        name: this.generalInformation.input.value,
                        package: packageName
                    },
                    room: {
                        style: roomStyle,
                        type: roomType,
                        comment: this.roomInformation.textarea.value,
                        checkboxes: roomCheckboxes
                    },
                    products: products,
                    user: {
                        name: this.formStep.input.name.value,
                        company: this.formStep.input.company.value,
                        phone: this.formStep.input.phone.value,
                        email: this.formStep.input.email.value
                    },
                    total: this.total
                }).then((res) => {
                    setTimeout(() => {
                        this.formStep.stage.loading = false;
                        this.formStep.stage.send = true;
                    }, 1000)
                }).catch((err) => {
                    this.formStep.stage.loading = false;
                });
            }
        }
    }
};