import { Module } from 'vuex';
import { RootState } from '@/store/types';
import { BrandsState } from '@/store/brands/types';
import getters from '@/store/brands/getters';
import actions from '@/store/brands/actions';
import mutations from '@/store/brands/mutations';

const state: BrandsState = {
    brands: []
};

const brands: Module<BrandsState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

export default brands;
