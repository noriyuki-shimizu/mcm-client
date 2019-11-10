import { GetterTree } from 'vuex';
import { RootState } from '@/store/types';
import { AuthsState } from '@/store/auths/types';

const getters: GetterTree<AuthsState, RootState> = {
    userId: (state: AuthsState) => {
        return state.userId;
    },
    user: (state: AuthsState) => {
        return state.user;
    },
    token: (state: AuthsState): string => {
        return state.token;
    },
    isSignedIn: (state: AuthsState): boolean => {
        return state.status;
    },
    allItem: (state: AuthsState): AuthsState => {
        return state;
    }
};

export default getters;
