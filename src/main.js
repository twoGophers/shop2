import Vue from 'vue'
import App from './App.vue'
import store from "./vuex/store"
import router from './router/router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import firebaseConfig  from './config/firebase'
import firebase from 'firebase'

//Подключение МД bootststrap
import * as mdbvue from 'mdbvue'
for (const component in mdbvue) {
Vue.component(component, mdbvue[component])
}

firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false


//Bus
export const bus = new Vue();

new Vue({
  render: h => h(App),
  store,
  router,
  created() {
    let vm = this;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        vm.$store.dispatch('STATE_CHANGED', user)
      } 
    });
  },
}).$mount('#app')


