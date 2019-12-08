import { GetterTree } from 'vuex';
import { RootState } from '@/store/types';
import { Brand, BrandsState } from '@/store/brands/types';
import config from 'config';
import store from '@/store';

const getters: GetterTree<BrandsState, RootState> = {
    getBrands: (state: BrandsState): Brand[] => {
        console.log('state: ', state);
        return state.brands;
    },

    initializeData: (): Brand => {
        const userId = store.getters[`${config.vuex.namespace.auths}/userId`];
        return {
            id: null,
            userId,
            name: '',
            link: '',
            image: {
                id: null,
                name: '',
                path: '',
                isDeleted: false,
            },
            country: '',
            isDeleted: false,
        }
    }
};

export default getters;
