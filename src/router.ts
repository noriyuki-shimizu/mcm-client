import Vue from 'vue';
import Router from 'vue-router';

import Login from './views/Login.vue';
import Home from './views/Home.vue';
import LeafletMap from './views/LeafletMap.vue';
import ClothesList from './views/myClothes/ClothesList.vue';
import TotalPrice from './views/myClothes/TotalPrice.vue';
import ShopMaintenance from './views/maintenance/ShopMaintenance.vue';
import BrandMaintenance from './views/maintenance/BrandMaintenance.vue';
import ClothesMaintenance from './views/maintenance/ClothesMaintenance.vue';
import firebase from '@/firebase';
import store from '@/store';

Vue.use(Router);

const namespace: string = 'auths';

const router: Router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: { requiresAuth: false },
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: '/map',
      name: 'leaflet-map',
      component: LeafletMap,
      meta: { requiresAuth: true },
    },
    {
      path: '/clothesList',
      name: 'clothes-list',
      component: ClothesList,
      meta: { requiresAuth: true },
    },
    {
      path: '/totalPrice',
      name: 'total-price',
      component: TotalPrice,
      meta: { requiresAuth: true },
    },
    {
      path: '/shopMaintenance',
      name: 'shop-maintenance',
      component: ShopMaintenance,
      meta: { requiresAuth: true },
    },
    {
      path: '/brandMaintenance',
      name: 'brand-maintenance',
      component: BrandMaintenance,
      meta: { requiresAuth: true },
    },
    {
      path: '/clothesMaintenance',
      name: 'clothes-maintenance',
      component: ClothesMaintenance,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Already authenticated.
    const signedIn = store.getters[`${namespace}/isSignedIn`];

    signedIn ? next() : next({ name: 'login' });

    return ;
  }
  next();
});

export default router;
