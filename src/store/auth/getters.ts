import { GetterTree } from 'vuex';
import { AuthsState, RootState } from '@/store/types';

const getters: GetterTree<AuthsState, RootState> = {
    user: (state: any) => {
        return state.user;
    },
    isSignedIn: (state: any) => {
        return state.status;
    },
};

export default getters;
