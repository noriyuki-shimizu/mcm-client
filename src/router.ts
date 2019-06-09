import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

Vue.use(Router);

const namespace: string = 'auths';

const router: Router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./views/Signin.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/Signup.vue'),
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

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Already authenticated.
    const signedIn = store.getters[`${namespace}/isSignedIn`];

    signedIn ? next() : next({ name: 'signin' });

    return ;
  }
  next();
});

export default router;
