import { Module } from 'vuex';
import { RootState } from '@/store/types';
import { Brand } from '@/store/brands/types';
import getters from '@/store/brands/getters';
import actions from '@/store/brands/actions';
import mutations from '@/store/brands/mutations';

const state: Brand[] = [
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
];

const brands: Module<Brand[], RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

export default brands;
