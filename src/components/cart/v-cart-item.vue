<template>
    <div class="v-cart-item">
        <div class="v-cart-item__image">
            <img :src="require('../../images/victoriaS/' + cart_item_data.image)">
        </div>
        <div class="v-cart-item__info">
            <h5>{{cart_item_data.name}}</h5>
            <p>{{cart_item_data.info}}</p>
            <p>{{cart_item_data.volume}} мл</p>
            <p>{{cart_item_data.price}} P.</p>
            
            <div class="v-cart-item__quantity">
                
                
                    <h6 class="rem">Количество :   
                        <b-button  variant = "outline-primary" @click="decrementItem"> - </b-button > 
                        <span>{{cart_item_data.quantity}}</span>
                        <b-button  variant = "outline-primary" @click="incrementItem"> + </b-button >     

                    </h6>
                
            </div>
            <b-button variant="primary" @click="deleteFromCart">Удалить</b-button>
            
        </div>
        
    </div>
</template>

<script>


export default {
    name : "v-cart-item",
    props : {
        cart_item_data: {
            type : Object,
            default () {
                return{}
            }
        }
    },
    mounted() {
        
    },
    methods : {
        
        decrementItem () {
            this.$emit('decrement');
        },
        incrementItem () {
            this.$emit('increment');
        },
        deleteFromCart() {
            this.$emit('deleteFromCart')
        }
    }
}
</script>

<style lang="scss">
.v-cart-item {
    width: 95%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 rgb(252, 200, 239);
    margin: 16px;
    padding: 16px;
    flex-direction: row;
    .v-cart-item__image{
        box-shadow: 0 0 8px 0 rgb(252, 200, 239);
        padding: 3%;
        img{
            width: 300px;
        }
    }
    .v-cart-item__info {
        padding: 3%;
    }
    .v-cart-item__quantity {
        width: 100%;
        display: flex;
        flex-direction: row;
        .rem {
            width: 60%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: start;
            button {
            margin: 3%;
            padding: 0;
            width: 30px;
            height: 30px;
            border-radius: 5px;
        }
        }

    }
}
</style>