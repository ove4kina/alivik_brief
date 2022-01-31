export const productInformation = {
    data() {
        return {
            productInformation: {
                options: {
                    products: [
                        {
                            name: 'Chair',
                            price: 120,
                            avatar: 'chair.jpg'
                        },
                        {
                            name: 'Storage',
                            price: 100,
                            avatar: 'storage.jpg'
                        },
                        {
                            name: 'Sofa',
                            price: 240,
                            avatar: 'sofa.jpg'
                        },
                        {
                            name: 'Table',
                            price: 60,
                            avatar: 'table.jpg'
                        },
                    ],
                    data: [
                        {
                            id: 1,
                            name: 'CAD-models'
                        },
                        {
                            id: 2,
                            name: 'Media & Photo materials'
                        },
                        {
                            id: 3,
                            name: 'Drawing, schemas, measurements'
                        },
                    ],
                    visualization: [
                        {
                            id: 1,
                            name: 'Basic geometric forms',
                        },
                        {
                            id: 2,
                            name: 'Organic forms and soft furnishing',
                        },
                        {
                            id: 3,
                            name: 'Blend of geometric and organic forms',
                        }
                    ],
                    size: [
                        {
                            id: 1,
                            name: 'Small',
                        },
                        {
                            id: 2,
                            name: 'Medium',
                        },
                        {
                            id: 3,
                            name: 'Big / X-Large',
                        }
                    ],
                    functions: [
                        {
                            type: 'Sofa',
                            options: [
                                {
                                    id: 1,
                                    name: 'Convert to Bed',
                                    price: 240
                                },
                                {
                                    id: 2,
                                    name: 'Storage',
                                    price: 160
                                },
                                {
                                    id: 3,
                                    name: 'Headrest',
                                    price: 100
                                },
                                {
                                    id: 4,
                                    name: 'Recliner',
                                    price: 200
                                },
                                {
                                    id: 5,
                                    name: 'Armtest',
                                    price: 120
                                },
                                {
                                    id: 6,
                                    name: 'Pillow',
                                    price: 80
                                }
                            ]
                        },
                        {
                            type: 'Chair',
                            options: [
                                {
                                    id: 1,
                                    name: 'Headrest',
                                    price: 100
                                },
                                {
                                    id: 2,
                                    name: 'Recliner',
                                    price: 140
                                },
                                {
                                    id: 3,
                                    name: 'Armrest',
                                    price: 100
                                },
                                {
                                    id: 4,
                                    name: 'Backrest',
                                    price: 100
                                },
                                {
                                    id: 5,
                                    name: 'High + Rotate',
                                    price: 40
                                },
                            ]
                        },
                        {
                            type: 'Table',
                            options: [
                                {
                                    id: 1,
                                    name: 'Size Transformation',
                                    price: 100
                                },
                                {
                                    id: 2,
                                    name: 'High Transformation',
                                    price: 60
                                },
                                {
                                    id: 3,
                                    name: 'Media Elements',
                                    price: 200
                                }
                            ]
                        }
                    ],
                    materials: [
                        {
                            type: 'Chair',
                            options: [
                                {
                                    name: 'Feets',
                                    options: [
                                        {
                                            id: 1,
                                            name: 'Plastic',
                                        },
                                        {
                                            id: 2,
                                            name: 'Wood',
                                        },
                                        {
                                            id: 3,
                                            name: 'Metal',
                                        }
                                    ]
                                },
                                {
                                    name: 'Upholstery',
                                    options: [
                                        {
                                            id: 1,
                                            name: 'Fabric',
                                        },
                                        {
                                            id: 2,
                                            name: 'Leather',
                                        }
                                    ]
                                }
                            ]
                        },

                        {
                            type: 'Sofa',
                            options: [
                                {
                                    name: 'Feets',
                                    options: [
                                        {
                                            id: 1,
                                            name: 'Plastic',
                                        },
                                        {
                                            id: 2,
                                            name: 'Wood',
                                        },
                                        {
                                            id: 3,
                                            name: 'Metal',
                                        }
                                    ]
                                },
                                {
                                    name: 'Upholstery',
                                    options: [
                                        {
                                            id: 1,
                                            name: 'Fabric',
                                        },
                                        {
                                            id: 2,
                                            name: 'Leather',
                                        }
                                    ]
                                }
                            ]
                        },

                        {
                            type: 'Table',
                            options: [
                                {
                                    name: 'Feets',
                                    options: [
                                        {
                                            id: 1,
                                            name: 'Plastic',
                                            avatar: ''
                                        },
                                        {
                                            id: 2,
                                            name: 'Wood',
                                            avatar: ''
                                        },
                                        {
                                            id: 3,
                                            name: 'Metal',
                                            avatar: ''
                                        }
                                    ]
                                },
                                {
                                    name: 'Tabletop',
                                    options: [
                                        {
                                            id: 1,
                                            name: 'Plastic',
                                            avatar: ''
                                        },
                                        {
                                            id: 2,
                                            name: 'Wood',
                                            avatar: ''
                                        },
                                        {
                                            id: 3,
                                            name: 'Metal',
                                            avatar: ''
                                        },
                                        {
                                            id: 4,
                                            name: 'Glass',
                                            avatar: ''
                                        },
                                        {
                                            id: 5,
                                            name: 'Stone',
                                            avatar: ''
                                        }
                                    ]
                                }
                            ]
                        },

                        {
                            type: 'Storage',
                            options: [
                                {
                                    name: 'Feets',
                                    options: [
                                        {
                                            id: 1,
                                            name: 'Plastic',
                                            avatar: ''
                                        },
                                        {
                                            id: 2,
                                            name: 'Wood',
                                            avatar: ''
                                        },
                                        {
                                            id: 3,
                                            name: 'Metal',
                                            avatar: ''
                                        }
                                    ]
                                },
                                {
                                    name: 'Upholstery',
                                    options: [
                                        {
                                            id: 1,
                                            name: 'Plastic',
                                            avatar: ''
                                        },
                                        {
                                            id: 2,
                                            name: 'Wood',
                                            avatar: ''
                                        },
                                        {
                                            id: 3,
                                            name: 'Metal',
                                            avatar: ''
                                        }
                                    ]
                                },
                                {
                                    name: 'Corpus',
                                    options: [
                                        {
                                            id: 1,
                                            name: 'Plastic',
                                            avatar: ''
                                        },
                                        {
                                            id: 2,
                                            name: 'Wood',
                                            avatar: ''
                                        },
                                        {
                                            id: 3,
                                            name: 'Metal',
                                            avatar: ''
                                        },
                                        {
                                            id: 4,
                                            name: 'Glass',
                                            avatar: ''
                                        },
                                        {
                                            id: 5,
                                            name: 'Stone',
                                            avatar: ''
                                        }
                                    ]
                                }
                            ]
                        },
                    ],
                    materialTypes: [
                        {
                            name: 'Fabric',
                            options: [
                                {
                                    id: 1,
                                    src: '/public/images/materials/fabric/1.jpg'
                                },
                                {
                                    id: 2,
                                    src: '/public/images/materials/fabric/2.jpg'
                                },
                                {
                                    id: 3,
                                    src: '/public/images/materials/fabric/3.jpg'
                                },
                                {
                                    id: 4,
                                    src: '/public/images/materials/fabric/4.jpg'
                                },
                                {
                                    id: 5,
                                    src: '/public/images/materials/fabric/5.jpg'
                                },
                                {
                                    id: 6,
                                    src: '/public/images/materials/fabric/6.jpg'
                                },
                                {
                                    id: 7,
                                    src: '/public/images/materials/fabric/7.jpg'
                                },
                                {
                                    id: 8,
                                    src: '/public/images/materials/fabric/8.jpg'
                                },
                                {
                                    id: 9,
                                    src: '/public/images/materials/fabric/9.jpg'
                                },
                                {
                                    id: 10,
                                    src: '/public/images/materials/fabric/10.jpg'
                                }
                            ],
                        },
                        {
                            name: 'Leather',
                            options: [
                                {
                                    id: 11,
                                    src: '/public/images/materials/leather/1.jpg'
                                },
                                {
                                    id: 12,
                                    src: '/public/images/materials/leather/2.jpg'
                                },
                                {
                                    id: 13,
                                    src: '/public/images/materials/leather/3.jpg'
                                },
                                {
                                    id: 14,
                                    src: '/public/images/materials/leather/4.jpg'
                                },
                                {
                                    id: 15,
                                    src: '/public/images/materials/leather/5.jpg'
                                },
                                {
                                    id: 16,
                                    src: '/public/images/materials/leather/6.jpg'
                                },
                                {
                                    id: 17,
                                    src: '/public/images/materials/fabric/7.jpg'
                                }
                            ],
                        },
                        {
                            name: 'Metal',
                            options: [
                                {
                                    id: 21,
                                    src: '/public/images/materials/metall/1.jpg'
                                },
                                {
                                    id: 22,
                                    src: '/public/images/materials/metall/2.jpg'
                                },
                                {
                                    id: 23,
                                    src: '/public/images/materials/metall/3.jpg'
                                },
                                {
                                    id: 24,
                                    src: '/public/images/materials/metall/4.jpg'
                                },
                                {
                                    id: 25,
                                    src: '/public/images/materials/metall/5.jpg'
                                },
                                {
                                    id: 26,
                                    src: '/public/images/materials/metall/6.jpg'
                                },
                                {
                                    id: 27,
                                    src: '/public/images/materials/fabric/7.jpg'
                                },
                                {
                                    id: 28,
                                    src: '/public/images/materials/metall/8.jpg'
                                },
                                {
                                    id: 29,
                                    src: '/public/images/materials/metall/9.jpg'
                                },
                                {
                                    id: 30,
                                    src: '/public/images/materials/metall/10.jpg'
                                }
                            ],
                        },
                        {
                            name: 'Plastic',
                            options: [
                                {
                                    id: 31,
                                    src: '/public/images/materials/plastic/1.jpg'
                                },
                                {
                                    id: 32,
                                    src: '/public/images/materials/plastic/2.jpg'
                                },
                                {
                                    id: 31,
                                    src: '/public/images/materials/plastic/3.jpg'
                                },
                                {
                                    id: 32,
                                    src: '/public/images/materials/plastic/4.jpg'
                                },
                                {
                                    id: 35,
                                    src: '/public/images/materials/plastic/5.jpg'
                                }
                            ],
                        },
                        {
                            name: 'Stone',
                            options: [
                                {
                                    id: 44,
                                    src: '/public/images/materials/stone/1.jpg'
                                },
                                {
                                    id: 45,
                                    src: '/public/images/materials/stone/2.jpg'
                                },
                                {
                                    id: 46,
                                    src: '/public/images/materials/stone/3.jpg'
                                },
                                {
                                    id: 47,
                                    src: '/public/images/materials/stone/4.jpg'
                                },
                                {
                                    id: 48,
                                    src: '/public/images/materials/stone/5.jpg'
                                },
                                {
                                    id: 49,
                                    src: '/public/images/materials/stone/6.jpg'
                                },
                                {
                                    id: 50,
                                    src: '/public/images/materials/fabric/7.jpg'
                                },
                                {
                                    id: 51,
                                    src: '/public/images/materials/stone/8.jpg'
                                },
                                {
                                    id: 52,
                                    src: '/public/images/materials/stone/9.jpg'
                                },
                                {
                                    id: 53,
                                    src: '/public/images/materials/stone/10.jpg'
                                }
                            ],
                        },
                        {
                            name: 'Wood',
                            options: [
                                {
                                    id: 54,
                                    src: '/public/images/materials/wood/1.jpg'
                                },
                                {
                                    id: 55,
                                    src: '/public/images/materials/wood/2.jpg'
                                },
                                {
                                    id: 56,
                                    src: '/public/images/materials/wood/3.jpg'
                                },
                                {
                                    id: 57,
                                    src: '/public/images/materials/wood/4.jpg'
                                },
                                {
                                    id: 58,
                                    src: '/public/images/materials/wood/5.jpg'
                                },
                                {
                                    id: 59,
                                    src: '/public/images/materials/wood/6.jpg'
                                },
                                {
                                    id: 60,
                                    src: '/public/images/materials/wood/7.jpg'
                                },
                                {
                                    id: 61,
                                    src: '/public/images/materials/wood/8.jpg'
                                },
                                {
                                    id: 62,
                                    src: '/public/images/materials/wood/9.jpg'
                                },
                                {
                                    id: 63,
                                    src: '/public/images/materials/wood/10.jpg'
                                }
                            ]
                        }
                    ],
                },
                products: [
                    this.newProduct('Chair')
                ]
            }
        }
    },
    mounted() {
        this.productInformation.products[0].materialsSelect = this.productMaterialsOptions('Chair');
        this.productInformation.products[0].materials = this.productMaterials('Chair');
    },
    methods: {
        addNextPart(data) {
            this.productInformation.products[data.indexProduct].materials.push({
                type: '',
                color: '#C4C4C4',
                scan: false,
                value: null,
                disabled: false,
                input: {
                    value: ''
                }
            });
        },
        removeNextPart(data) {
            this.productInformation.products[data.indexProduct].materials.splice(data.indexMaterial,1);
        },
        productMaterials(type) {
            let options = [];
            this.productInformation.options.materials.map((material) => {
                if (material.type === type) {
                    options = material.options;
                }
            });
            let result = [];
            options.map((option) => {
                result.push({
                    type: option.name,
                    color: '#C4C4C4',
                    scan: false,
                    value: null,
                    disabled: true
                });
            });
            return result;
        },
        productMaterialsOptions(type) {
            let options = [];
            this.productInformation.options.materials.map((material) => {
                if (material.type === type) {
                    options = material.options;
                }
            });
            let result = [];
            options.map((option) => {
                result.push({
                    options: option.options,
                    input: {
                        value: option.name
                    },
                    inputs: []
                })
            });
            return result;
        },
        changeProductMaterialName(data) {
            this.productInformation.products[data.indexProduct].materials[data.indexMaterial].input.value = data.value;
        },
        changeProductMaterialColor(data) {
            this.productInformation.products[data.indexProduct].materials[data.indexMaterial].color = data.value;
        },
        setProductMaterailScanOption(data) {
            this.productInformation.products[data.indexProduct].materials[data.indexMaterial].scan = true;
            this.productInformation.products[data.indexProduct].materials[data.indexMaterial].value = null;
        },
        changeProductMaterialOption(data) {
            this.productInformation.products[data.indexProduct].materials[data.indexMaterial].scan = false;
            this.productInformation.products[data.indexProduct].materials[data.indexMaterial].value = data.value.id;
        },
        getProductPriceByType(type) {
            let price = 0;
            this.productInformation.options.products.map((product) => {
                if (product.name === type) {
                    price = product.price;
                }
            });
            return price;
        },
        changeProductType(data) {
            let oldPrice = this.getProductPriceByType(this.productInformation.products[data.index].type),
                newPrice = this.getProductPriceByType(data.type);

            this.invoice.total -= oldPrice;
            this.invoice.total += newPrice;

            let product = this.productInformation.products[data.index];
            product.data = [];
            product.size.value = 1;
            product.visual.value = 1;
            product.functions = {
                value: true,
                options: []
            };
            product.materialsSelect = [];
            product.materials = [];
            product.materialsAdditional = [];
            product.arvrmodel = false;

            product.materialsSelect = this.productMaterialsOptions(data.type);
            product.materials = this.productMaterials(data.type);

            product.type = data.type;
        },
        toggleProductData(data) {
            let flagIn = false;
            this.productInformation.products[data.indexProduct].data.map((d, index) => {
                if (d.id === data.dataId) {
                    flagIn = true;
                    this.productInformation.products[data.indexProduct].data.splice(index, 1);
                }
            });

            if (!flagIn) {
                this.productInformation.products[data.indexProduct].data.push({
                    id: data.dataId
                })
            }
        },
        chooseProductVisual(data) {
            this.productInformation.products[data.indexProduct].visual.value = data.id;
        },
        changeProductName(data) {
            this.productInformation.products[data.indexProduct].name.value = data.value;
        },
        changeProductComment(data) {
            this.productInformation.products[data.indexProduct].comment = data.value.value;
        },
        chooseProductSize(data) {
            this.productInformation.products[data.indexProduct].size.value = data.id;
        },
        changeProductFunctionsCheckbox(data) {
            this.productInformation.products[data.indexProduct].functions.value = !this.productInformation.products[data.indexProduct].functions.value;
        },
        changeProductArvrmodelCheckbox(data) {
            this.productInformation.products[data.indexProduct].arvrmodel = !this.productInformation.products[data.indexProduct].arvrmodel;
        },
        toggleProductCheckboxFunctions(data) {
            let product = this.productInformation.products[data.indexProduct];
            if (product.functions.options.includes(data.id)) {
                product.functions.options.splice(product.functions.options.indexOf(data.id), 1);
            } else {
                product.functions.options.push(data.id);
            }
        },

        newProduct(type) {
            return {
                type: type,
                name: {
                    value: ''
                },
                data: [],
                visual: {
                    value: 1
                },
                materialsSelect: [],
                size: {
                    value: 1
                },
                functions: {
                    value: true,
                    options: []
                },
                materials: [],
                comment: '',
                arvrmodel: false
            }
        },
        addProduct() {
            // if(
            //     this.generalInformation.packages.activeIndex === 1 ||
            //     this.generalInformation.packages.activeIndex === 2
            // ) {
                let product = this.newProduct('Chair');
                this.productInformation.products.push(product);
            // }
        }
    }
};