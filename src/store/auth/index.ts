import { Module } from 'vuex';
import { AuthsState, RootState } from '@/store/types';
import getters from '@/store/auth/getters';
import actions from '@/store/auth/actions';
import mutations from '@/store/auth/mutations';

const state: AuthsState = {
    user: {},
    status: false,
};

const auths: Module<AuthsState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

export default auths;
