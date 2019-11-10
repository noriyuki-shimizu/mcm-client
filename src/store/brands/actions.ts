import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { Brand } from '@/store/brands/types';
import api from '@/plugins/api';
import config from 'config';
import store from '@/store';

const actions: ActionTree<Brand[], RootState> = {
    search: async ({ commit }, { params }) => {
        try {
            const userId = store.getters[`${config.vuex.namespace.auths}/userId`];
            const result = await api({
                method: 'GET',
                url: `${userId}/brands/`,
                params: {
                    inputDataJson: {
                        ...params
                    }
                }
            });

            commit('onBrandsStateChanged', result.data);
        } catch (err) {
            throw err;
        }
    },
};

export default actions;
