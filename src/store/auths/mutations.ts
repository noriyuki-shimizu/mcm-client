import { MutationTree } from 'vuex';
import { AuthsState } from '@/store/auths/types';

const mutations: MutationTree<AuthsState> = {
    onUserIdStateChanged(state: AuthsState, userId: number) {
        state.userId = userId;
    },
    onAuthStateChanged(state: AuthsState, user: any) {
        state.user = user;
    },
    onTokenStateChanged(state: AuthsState, token: string) {
        state.token = token;
    },
    onUserStatusChanged(state: AuthsState, status: any) {
        state.status = status;
    }
};

export default mutations;
