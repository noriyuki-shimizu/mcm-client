import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import config from 'config';

Vue.use(Router);

const router: Router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./views/auth/Signin.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/auth/Signup.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/',
      component: () => import('./views/Common.vue'),
      meta: { requiresAuth: false },
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('./views/Home.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/map',
          name: 'leaflet-map',
          component: () => import('./views/LeafletMap.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/clothesList',
          name: 'clothes-list',
          component: () => import('./views/myClothes/ClothesList.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/totalPrice',
          name: 'total-price',
          component: () => import('./views/myClothes/TotalPrice.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/shopMaintenance',
          name: 'shop-maintenance',
          component: () => import('./views/maintenance/ShopMaintenance.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/brandMaintenance',
          name: 'brand-maintenance',
          component: () => import('./views/maintenance/BrandMaintenance.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/clothesMaintenance',
          name: 'clothes-maintenance',
          component: () => import('./views/maintenance/ClothesMaintenance.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});

const isRequiresAuth = (record: any): boolean => record.meta.requiresAuth;

router.beforeEach((to, from, next) => {
  if (to.matched.some(isRequiresAuth)) {
    // Already authenticated.
    const signedIn = store.getters[`${config.vuex.namespace.auths}/isSignedIn`];

    signedIn ? next() : next({ name: 'signin' });

    return ;
  }
  next();
});

export default router;
