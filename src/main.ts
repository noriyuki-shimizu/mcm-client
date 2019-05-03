import Vue from 'vue';
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';
import config from 'config';

firebase.initializeApp(config.firebase);

Vue.config.productionTip = false;

// TODO: グルーバルミックスインからミックスインへ変更する
Vue.mixin({
  filters: {
    formatByPrice(price: number): string | null {
        if (!price === null) {
            return null;
        }
        return '¥ ' + price.toLocaleString();
    },
    formatByDeleteFlag(deleteFlag: boolean): string {
        return deleteFlag ? 'Deleted' : 'Not deleted';
    },
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
