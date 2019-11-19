import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { BrandsState } from '@/store/brands/types';
import api from '@/plugins/api';
import config from 'config';
import store from '@/store';

const actions: ActionTree<BrandsState, RootState> = {
    fetchBrands: async ({ commit }, { params }): Promise<void> => {
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
