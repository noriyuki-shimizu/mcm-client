import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { Brand, BrandsState } from '@/store/brands/types';
import api from '@/plugins/api';
import config from 'config';
import store from '@/store';

type SerializeBrand = {
    [k: string]: number | string | Brand['image'] | boolean | null,
};

const serialize = (brand: Brand, keys: string[]): SerializeBrand => {
    return keys.map(key => ({[key]: brand[key]}))
        .reduce((acc, cur) => Object.assign(acc, cur), {});
}

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
        const { image }: Pick<Brand, 'image'> = brand;

        if (brand.id) {
            const result = await api({
                method: 'PUT',
                url: `${userId}/brands/`,
                params: {
                    inputDataJson: {
                        ...serialize(brand, ['id', 'name', 'link', 'country', 'isDeleted']),
                        imageId: image.id,
                        imageName: image.name,
                        imagePath: image.path,
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
                    ...serialize(brand, ['name', 'link', 'country']),
                    imageName: image.name,
                    imagePath: image.path,
                }
            }
        });
        commit('addCreateBrand', result.data);
    }
};

export default actions;
