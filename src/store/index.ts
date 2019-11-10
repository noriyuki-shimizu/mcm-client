import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { RootState } from '@/store/types';
import auths from '@/store/auths';
import brands from '@/store/brands';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        version: '1.0.0'
    },
    modules: {
        auths,
        brands
    },
    plugins: [
        createPersistedState({
            key: 'mcmApp'
        })
    ]
};

export default new Vuex.Store<RootState>(store);
