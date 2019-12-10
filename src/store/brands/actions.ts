import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { Brand, BrandsState } from '@/store/brands/types';
import api from '@/plugins/api';
import config from 'config';
import store from '@/store';
import serialize from '@/store/convert/serialize';

const actions: ActionTree<BrandsState, RootState> = {
    fetchBrands: async ({ commit }, params): Promise<void> => {
        const userId = store.getters[`${config.vuex.namespace.auths}/userId`];
        const result = await api({
            method: 'GET',
            url: `${userId}/brands/`,
            params: {
                inputDataJson: {
                    ...params
                }
            }
        }).catch(err => {
            throw err;
        });

        commit('onBrandsStateChanged', result.data);
    },

    save: async ({ commit }, brand: Readonly<Brand>): Promise<void> => {
        const userId = store.getters[`${config.vuex.namespace.auths}/userId`];
        const brandParamKey: string[] = ['name', 'link', 'country'];
        const imageParamKey: string[] = ['name', 'path'];

        if (brand.id) {
            const result = await api({
                method: 'PUT',
                url: `${userId}/brands/`,
                params: {
                    inputDataJson: {
                        ...serialize<Brand>(brand, brandParamKey.concat(['id'])),
                        image: brand.image
                            ? serialize<Brand['image']>(brand.image, imageParamKey.concat(['id']))
                            : null,
                    }
                }
            });
            commit('updateBrand', result.data);
            return;
        }

        const result = await api({
            method: 'POST',
            url: `${userId}/brands/`,
            params: {
                inputDataJson: {
                    ...serialize<Brand>(brand, brandParamKey),
                    image: brand.image
                        ? serialize<Brand['image']>(brand.image, imageParamKey)
                        : null,
                }
            }
        });
        commit('addCreateBrand', result.data);
    }
};

export default actions;
