import Vue from 'vue';
import firebase from 'firebase';
import config from 'config';
import App from './App.vue';
import router from './router';
import store from './store';

const UIkit = require('uikit');
const Icons = require('uikit/dist/js/uikit-icons');

UIkit.use(Icons);

firebase.initializeApp(config.firebase);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');