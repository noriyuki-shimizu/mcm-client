import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { AuthsState } from '@/store/auths/types';
import api from '@/api';

const actions: ActionTree<AuthsState, RootState> = {
    saveToken: async ({ commit }): Promise<any> => {
        const [error, response] = await api({
            method: 'POST',
            url: '/preLogin',
        });

        console.log('preLogin result: %o, error: %o', response, error);
        commit(`onUserIdStateChanged`, response.data);
    },
};

export default actions;
