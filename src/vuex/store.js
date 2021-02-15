import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import user from '../store/user'
import general from '../store/general'
import userData from '../store/userData'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        products : [],
        cart : [],
        searchValue : '',
        searchMenu : '',
        minPrice : [],
        maxPrice : []

    },
    mutations : {
        //Слайдер-ползунок
        SET_MIN_SLIDER : (state, value) => {
            state.minPrice = value;
        },
        SET_MAX_SLIDER : (state, value) => {
            state.maxPrice = value;
        },
        //Menu
        SET_SEARC_VALUE_MENU :(state, value) => {
            state.searchMenu = value;
        },
        //Окно поиска
        SET_SEACH_VALUE_TO_VUEX : (state, value) => {
            state.searchValue = value;
        },


        INCREMENT : (state, index) => {
            state.cart[index].quantity++;
        },
        DECREMENT : (state, index) => {
            if(state.cart[index].quantity > 1) {
                state.cart[index].quantity--;
            }
        },


        SET_PRODUCTS_TO_STATE : (state, products) => {
            state.products = products;
        },
        SET_CART : (state, product) => {
            if(state.cart.length) {
                let isProductExists = false;
                state.cart.map(function(item) {
                    if(item.article === product.article) {
                        isProductExists = true;
                        item.quantity++;
                    }
                })
                if (!isProductExists) {
                    state.cart.push(product);
                }
            } else {
                state.cart.push(product);
            }
            
        },
        REMOVE_FROM_CART : (state, index) => {
            state.cart.splice(index, 1)
        }
    },


    actions: {
        //Слайдер-ползунок
        GET_MIN_SLIDER({commit}) {
            commit('SET_MIN_SLIDER');
        },
        GET_MAX_SLIDER({commit}, value) {
            commit('SET_MAX_SLIDER', value);
        },
        //Menu
        GET_SEARCH_MENU({commit}, value) {
            commit('SET_SEARC_VALUE_MENU', value)
        },
        //Окно поиска
        GET_SEACH_VALUE_TO_VUEX({commit}, value) {
            commit('SET_SEACH_VALUE_TO_VUEX', value)
        },

        
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('https://shop2-822cc-default-rtdb.firebaseio.com/products/.json', {
              method: "GET"
            })
              .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
              })
              .catch((error) => {
                console.log(error)
                return error;
              })
          },

          
          ADD_TO_CART({commit}, product) {
              commit ('SET_CART', product)
          },

          DELETE_FROM_CART({commit}, index) {
              commit("REMOVE_FROM_CART", index)
          },



          INCREMENT_CART_ITEM ({commit}, index) {
            commit ('INCREMENT', index);
            },
          DECREMENT_CART_ITEM ({commit}, index) {
            commit ('DECREMENT', index);
            }
    },
    getters: {
        PRODUCTS (state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        },
        SEARCH_VALUE(state) {
            return state.searchValue;
        },
        //Menu
        SEARCH_MENU(state) {
            return state.searchMenu;
        },
        //Слайдер-ползунок
        MIN_SLIDER(state) {
            return state.minPrice;
        },
        MAX_SLIDER(state) {
            return state.maxPrice;
        }
    },
    modules : {
        user,
        general,
        userData
    }

});

export default store;