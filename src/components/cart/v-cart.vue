<template>
    <div class="v-cart">
        <h3>Корзина</h3>
        <h4 v-if="!cart_data.length">Ваша корзина пуста...</h4>
        <router-link :to="{name : 'catalog'}">
            
            <b-button variant="primary">Вернуться назад</b-button>
        </router-link>

        <vCartItem
        
            v-for="(item,index) in cart_data"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
        >
        </vCartItem>

        <div class="v-cart__total" v-if="cart_data.length">
            <p class="v-cart__total__name">Всего : </p>
            <p>{{cartTotalCost}} P.</p>
        </div>
    </div>
</template>

<script>
import vCartItem from './v-cart-item'
import {mapActions, mapGetters} from 'vuex'

export default {
    name : "v-cart",
    components : {
        vCartItem
    },
    props : {
        cart_data: {
            type : Array,
            default() {
                return []
            }
        }
    },
    methods : {
        ...mapActions([
            'DELETE_FROM_CART',
            'INCREMENT_CART_ITEM',
            'DECREMENT_CART_ITEM'
        ]),
        increment(index) {
            this.INCREMENT_CART_ITEM(index);
        },
        decrement(index) {
            this.DECREMENT_CART_ITEM(index);
        },
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index);
        }
    },
    computed : {
        ...mapGetters([
            'CART'
            
        ]),
        cartTotalCost() {
            let result = [];

            if (this.cart_data.length) {
            for( let item of this.cart_data) {
                result.push(item.price * item.quantity)
            }
            result = result.reduce(function(sum, el) {
                return sum + el;
            })
            return result;
            } else {
                return 0;
            }
        }
    },
}
</script>

<style lang="scss">
.v-cart {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    h3 {
        margin-top: 50px;
        margin-bottom: 20px;
        color: rgb(100, 100, 100);
    }
    &__total {
        position: flex;
        width: 100%;
        bottom: 0;
        right: 0;
        left: 0;
        padding: 24px;
        display: flex;
        justify-content: center;
        color: #ffffff;
        background: rgb(11, 221, 99);
    }
    &__total__name {
        margin-right: 16px;
    }


}
</style>