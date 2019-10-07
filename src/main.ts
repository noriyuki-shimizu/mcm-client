import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from './firebase/auth';

const UIkit = require('uikit');
const Icons = require('uikit/dist/js/uikit-icons');

UIkit.use(Icons);

firebase.init();

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
