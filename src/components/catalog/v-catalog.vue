<template>
    <div class="v-catalog">
        <div class="catalog_item">
            <vCatalogItem
                v-for = "product in pagenatedProducts "
                :key = "product.article"
                :product_data ="product"
                @addToCart ="addToCart"
            >
            </vCatalogItem>
        </div>

        <div class="v-table_pagination">
                <div class="page"
                    v-for="page in pages"
                    :key="page"
                    :class="{'pageActive' : page ===  pagesNumber}"
                    @click="pageClick(page)"
                >{{page}}</div>
        </div>



         <!-- <vCart
                v-if="CART.length"
                :cart_data = "CART"
                >
        </vCart> -->
        
    </div> 
</template>

<script>
//import vCart from '../cart/v-cart'
import vCatalogItem from "./v-catalog-item"
import { mapActions, mapGetters } from 'vuex'


export default {
    name: "v-catalog",
    components : {
        vCatalogItem,

    },
    data () {
        return {
            userPerPage : 12,
            pagesNumber : 1,
            sortedProducts: [],
            sortedProductsMenu : [],
            
            sortMinPrice : 0,
            // sortMaxPrice : [],
            
        }
    },
    methods : {
        
        pageClick (page) {
            this.pagesNumber = page;
        },
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART',
            
        ]),

        addToCart (data) {
            this.ADD_TO_CART(data)
        },
        //Сортировка с SEARCHE
        sortProductsBySearchValue(value) {
            this.sortedProducts = [...this.PRODUCTS]
            if (value) {
            this.sortedProducts = this.sortedProducts.filter(function (item) {
                return item.name.toLowerCase().includes(value.toLowerCase())
                    })
                } else {
                    this.sortedProducts = this.PRODUCTS;
            }
        },
        //Сортировка с меню
        sortProductsByMenu(value) {
            this.sortedProductsMenu = [...this.PRODUCTS]
            if(value) {
                this.sortedProductsMenu = this.sortedProductsMenu.filter(function (item) {
                        if(item.category == value) {
                            return item.category;
                        }
                    }) 
                } else {
                    this.sortedProductsMenu = this.PRODUCTS;
            }
        },
        sortProductByPrice() {
            
        },
        
    },
    watch : {
        SEARCH_VALUE() {
            this.sortProductsBySearchValue(this.SEARCH_VALUE);
        },
        SEARCH_MENU() {
            this.sortProductsByMenu(this.SEARCH_MENU);
        },
        MIN_SLIDER() {
            this.sortProductByPrice(this.MIN_SLIDER);
        },
        // MAX_SLIDER() {
        //     this.sortMaxPrice(this.MAX_SLIDER);
        // }

    },

    mounted() {
        this.GET_PRODUCTS_FROM_API()
        .then((response) => {
            if (response.data) {
                this.sortProductByPrice(this.MIN_SLIDER)
                this.sortProductsBySearchValue(this.SEARCH_VALUE)
                this.sortProductsByMenu(this.SEARCH_MENU)
            }
        })
    },
    computed : {
        ...mapGetters([
            'PRODUCTS',
            'CART',
            'SEARCH_VALUE',
            'SEARCH_MENU',
            'MIN_SLIDER',
            //'MAX_SLIDER'
        ]),

        
        //Пагинация
        pages () {
            return Math.ceil(this.sortedProductsMenu.length/7);
        },

        pagenatedProducts() {
            let from = (this.pagesNumber - 1) * this.userPerPage;
            let to = from + this.userPerPage;
            return this.sortedProductsMenu.slice(from, to);
        },
        filteredProducts() {
            if(this.sortedProducts.length) {
                return this.sortedProducts;
            }
            
            if(this.sortedProductsMenu.length) {
                    return this.sortedProductsMenu;
            } else {
                return this.PRODUCTS;
            }
        }
    },

}
</script>

<style lang="scss">

.v-catalog {
    
    .catalog_item {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-top: 5%;
    }
    .v-table_pagination {
        display: flex;
        justify-content: center;
        box-shadow: 0 0 8px 0 rgb(252, 200, 239);
        .page {
            box-shadow: 0 0 8px 0 rgb(252, 200, 239);
            margin: 1%;
            padding: 5px 15px;
            color: rgb(124, 124, 124);
            border-radius: 5px;
            &:hover {
                background: pink;
                cursor: pointer;
                color : white;
            }
        }
        
    }
    .pageActive {
        background: pink;
        cursor: pointer;
        color : white;
    }

}
</style>