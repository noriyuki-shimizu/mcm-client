import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { AuthsState } from '@/store/auths/types';
import config from 'config';
import axios from '@/api';

const actions: ActionTree<AuthsState, RootState> = {
    saveToken: async ({ commit, getters }): Promise<any> => {
        console.log(111);
        console.log(commit);
        console.log(getters.token);

        const hoge = await axios({
            method: 'POST',
            url: '/preLogin',
        });
    },
};

export default actions;
