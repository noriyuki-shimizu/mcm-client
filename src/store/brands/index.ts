import { Module } from 'vuex';
import { RootState } from '@/store/types';
import { BrandDto } from '@/store/brands/types';
import getters from '@/store/brands/getters';
import actions from '@/store/brands/actions';
import mutations from '@/store/brands/mutations';

const namespaced = true;

const state: BrandDto[] = [
    {
        id: -1,
        userId: -1,
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
];

const brands: Module<BrandDto[], RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};

export default brands;
