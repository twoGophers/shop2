<template>
    <div class="v-header">
        <div class="logo">
            <img src="../../images/img.png" alt="" srcset="">
        </div>
        <div class="titleHeader">
            <h3>Pink- Cat</h3>
        </div>
        <div class="searcheHeader">
            <div class="contactHeader">
                <p>Телефон : +8-123-456-78-90</p>
                <p>Контакты  : pink...</p>
            </div>
            <div class="searchHeader">
                <b-nav-form>
                <b-form-input v-model="searchValue" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <router-link :to="{name : 'catalog'}">
                        <b-button  @click="search(searchValue)" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </router-link>
                </b-nav-form>
            </div>
            <div class="cartHeader">
                <img src="../../images/3468855.svg" alt="cart" srcset="">
                <router-link :to="{name : 'cart', params : {cart_data: CART}}">
                    <h5>{{CART.length}}</h5>
               </router-link>
            </div>
           
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'


export default {
    name : "v-header",
    data () {
        return {
            searchValue : ''
        }
    },
    components : {
    },
    computed : {
        ...mapGetters([
            'CART',
            'SEARCH_VALUE'
        ])
    },
    methods : {
        ...mapActions ([
            'GET_SEACH_VALUE_TO_VUEX'
        ]),
        search (value) {
            this.GET_SEACH_VALUE_TO_VUEX(value);
        }
    }
}
</script>

<style lang="scss">
.v-header {
    width: 100%;
    background: url("../../images/bgHeader.jpg") no-repeat;
    background-size: cover;
    height: 120px;
    display: flex;
    flex-direction: row;
    
    .logo{
        width: 20%;
        display: flex;
        img {
            width: 100%;
        }
    }
    .titleHeader {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: URW Chancery L, cursive;
        h3 {
            font-size: 2.0em;
        }

    }
    .searcheHeader {
        width: 60%;
        display: flex;
        flex-direction: row;
        
        .contactHeader{
            width: 40%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: URW Chancery L, cursive;
        }
        .searchHeader{
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            
        }
        .cartHeader{
            width: 20%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            img {
                width: 35px;
            }
            h5 {
                margin-left: 10px;
            }

        }
    }
}
</style>