import Vue from 'vue';
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';

const config = {
  apiKey: 'AIzaSyCSAxcqVOgM_XdTIJTOv4mckREJEcnivsc',
  authDomain: 'mcm-client.firebaseapp.com',
  databaseURL: 'https://mcm-client.firebaseio.com',
  projectId: 'mcm-client',
  storageBucket: 'mcm-client.appspot.com',
  messagingSenderId: '1013848755479',
};
firebase.initializeApp(config);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
