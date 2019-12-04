import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { AuthsState } from '@/store/auths/types';
import api from '@/plugins/api';

const actions: ActionTree<AuthsState, RootState> = {
    saveToken: async ({ commit }): Promise<void> => {
        try {
            const response = await api({
                method: 'POST',
                url: '/preLogin'
            });

            commit(`onUserIdStateChanged`, response.data);
        } catch (err) {
            throw err;
        }
    }
};

export default actions;
