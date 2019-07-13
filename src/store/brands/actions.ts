import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { BrandDto } from '@/store/brands/types';
import api from '@/api';

const actions: ActionTree<BrandDto[], RootState> = {
    search: async ({ commit }, { userId, params }) => {
        const [error, result] = await api({
            method: 'GET',
            url: `${userId}/brands`,
            params
        });

        if (error) {
            throw new Error(error);
        }

        commit('onBrandDtoStateChanged', result.data);
    }
};

export default actions;
