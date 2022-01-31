export const invoice = {
    data() {
        return {
            invoice: {
                total: 0
            }
        }
    },
    computed: {
        showInvoice() {
            // this.tabs.activeIndex !== 3 &&
            return this.generalInformation.packages.activeIndex !== null ||
                this.roomInformation.radioStyles.activeRadio !== null ||
                this.roomInformation.radioTypes.activeRadio !== null
        },
        total() {
            let total = 0;
            switch (this.generalInformation.packages.activeIndex) {
                case 0:
                    total = 0;
                    break;
                case 1:
                    total = 1600;
                    break;
                case 2:
                    total = 2800;
                    break;
            }

            this.roomInformation.checkboxes.active.map((checkboxIndex) => {
                this.roomInformation.checkboxes.list.map((checkbox, index) => {
                    if (checkboxIndex === index) {
                        let checkboxPrice = checkbox.price.replace(/\D/g, '');
                        if (checkboxPrice !== '') {
                            total += parseInt(checkboxPrice, 10);
                        }
                    }
                })
            });

            let productPrice = 0;
            if (
                this.tabs.activeIndex === 2 ||
                this.tabs.activeIndex === 3
            ) {
                this.productInformation.products.map((product) => {
                    productPrice = this.getProductPrice(product);
                    total += productPrice;
                });
            }

            return total;
        }
    },
    methods: {
        getProductPrice(product) {
            let productPrice = 0;

            this.productInformation.options.products.map((productOption) => {
                if (product.type === productOption.name) {
                    productPrice += productOption.price;
                }
            });

            productPrice *= product.visual.value;

            if (product.type === 'Sofa') {
                switch (product.size.value) {
                    case 2:
                        productPrice *= 1.5;
                        break;
                    case 3:
                        productPrice *= 2;
                        break;
                }
            }

            if (['Storage', 'Table'].includes(product.type)) {
                switch (product.size.value) {
                    case 2:
                        productPrice *= 2.5;
                        break;
                    case 3:
                        productPrice *= 4;
                        break;
                }
            }

            if (product.functions.value) {
                let options = [];
                this.productInformation.options.functions.map((f) => {
                    if (f.type === product.type) {
                        options = f.options;
                    }
                });

                options.map((option) => {
                    if (product.functions.options.includes(option.id)) {
                        productPrice += option.price;
                    }
                });
            }

            product.materials.map((material) => {
                if (material.scan) {
                    productPrice += 100;
                }
            });


            if (product.arvrmodel) {
                productPrice *= 1.2;
            }

            return productPrice;
        },

        invoiceProducts(products) {
            let result = [];

            if(!([0,1].includes(this.tabs.activeIndex))) {
                products.map((product) => {
                    result.push({
                        type: product.type,
                        name: product.name.value,
                        visual: this.getVisualNameById(product.visual.value),
                        size: this.capitalizeFLetter(this.getSizeNameById(product.size.value)),
                        additional: this.getProductPrice(product)
                    })
                });
            }

            return result;
        },
        capitalizeFLetter(value) {
            return value.charAt(0).toUpperCase() +
                value.slice(1);
        }
    }
};