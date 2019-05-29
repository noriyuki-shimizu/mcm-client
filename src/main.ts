import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from './type/domain/repository/firebase/auth';
import Vuex from 'vuex';

firebase.init();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
