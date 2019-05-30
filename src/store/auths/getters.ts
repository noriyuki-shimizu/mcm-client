import { GetterTree } from 'vuex';
import { RootState } from '@/store/types';
import { AuthsState } from '@/store/auths/types';

const getters: GetterTree<AuthsState, RootState> = {
    user: (state: AuthsState) => {
        return state.user;
    },
    token: (state: AuthsState) => {
        return state.token;
    },
    isSignedIn: (state: AuthsState): boolean => {
        return state.status;
    },
};

export default getters;
