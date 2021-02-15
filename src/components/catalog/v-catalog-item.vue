<template>
    <div class="v-catalog-item">
        <img :src="require('../../images/victoriaS/' + product_data.image)">
        <h5>{{product_data.name}}</h5>
        <p>{{product_data.volume}} мл</p>
        <p>Цена : {{product_data.price}} P.</p>
        <b-button variant="primary" @click="addToCart">В корзину</b-button>
    </div>
</template>

<script>
export default {
    name : "v-catalog-item",
    props : {
        product_data : {
            type : Object,
            default () {
                return {}
            }
        }
    },
    methods : {
        addToCart() {
            this.$emit('addToCart', this.product_data)
        }
        },
    mounted () {
            this.$set(this.product_data, 'quantity', 1)
        }
}
</script>

<style lang="scss">
.v-catalog-item {
    flex-basis: 20%;
    box-shadow: 0 0 8px 0 rgb(252, 200, 239);
    margin-bottom: 16px;
    padding: 2%;
    margin: 1%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-items: center;
    align-items: center;
    cursor: pointer;
    img {
        width: 80%;
    }
}
</style>