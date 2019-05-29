import { GetterTree } from 'vuex';
import { RootState } from '@/store/types';
import { AuthsState } from '@/store/auths/types';

const getters: GetterTree<AuthsState, RootState> = {
    user: (state: AuthsState) => {
        return state.user;
    },
    isSignedIn: (state: AuthsState): boolean => {
        return state.status;
    },
};

export default getters;
