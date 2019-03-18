import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ClothesList from './views/myClothes/ClothesList.vue';
import TotalPrice from './views/myClothes/TotalPrice.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/clothesList',
      name: 'clothes-list',
      component: ClothesList,
    },
    {
      path: '/totalPrice',
      name: 'total-price',
      component: TotalPrice,
    },
  ],
});
