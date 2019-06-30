import { Module } from 'vuex';
import { RootState } from '@/store/types';
import { AuthsState } from '@/store/auths/types';
import getters from '@/store/auths/getters';
import actions from '@/store/auths/actions';
import mutations from '@/store/auths/mutations';

const namespaced: boolean = true;

const state: AuthsState = {
    userId: 0,
    user: {},
    token: '',
    status: false,
};

const auths: Module<AuthsState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};

export default auths;
