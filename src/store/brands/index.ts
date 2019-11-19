import { Module } from 'vuex';
import { RootState } from '@/store/types';
import { BrandsState } from '@/store/brands/types';
import getters from '@/store/brands/getters';
import actions from '@/store/brands/actions';
import mutations from '@/store/brands/mutations';

const state: BrandsState = {
    brands: [
        {
            id: null,
            userId: null,
            name: '',
            link: '',
            image: {
                id: null,
                name: '',
                path: '',
                isDelete: false
            },
            country: '',
            isDelete: false
        }
    ]
};

const brands: Module<BrandsState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

export default brands;
