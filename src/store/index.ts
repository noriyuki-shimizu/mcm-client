import Vue from 'vue';
import Vuex from 'vuex';

import ClothesModule from '@/store/modules/clothesModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ClothesModule,
  }
});
