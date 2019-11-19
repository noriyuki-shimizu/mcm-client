import { GetterTree } from 'vuex';
import { RootState } from '@/store/types';
import { Brand, BrandsState } from '@/store/brands/types';
import config from 'config';
import store from '@/store';

const getters: GetterTree<BrandsState, RootState> = {
    getBrands: (state: BrandsState) => state.brands,

    findOne: (state: BrandsState, id: number) =>
        state.brands.find(brand => brand.id === id),

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
                isDelete: false,
            },
            country: '',
            isDelete: false,
        }
    }
};

export default getters;
