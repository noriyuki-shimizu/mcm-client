import { MutationTree } from 'vuex';
import { AuthsState, Auth } from '@/store/types';

const mutations: MutationTree<AuthsState> = {
    onAuthStateChanged(state: any, user: any) {
        state.user = user;
    },
    onUserStatusChanged(state: any, status: any) {
        state.status = status;
    },
};

export default mutations;
