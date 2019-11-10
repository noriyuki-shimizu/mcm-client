import { GetterTree } from 'vuex';
import { RootState } from '@/store/types';
import { Brand } from '@/store/brands/types';
import config from 'config';
import store from '@/store';

const getters: GetterTree<Brand[], RootState> = {
    get: (state: Brand[]) => state,

    findOne: (state: Brand[], id: number) =>
        state.find(brandDto => brandDto.id === id),

    initializeData: (): Brand => {
        const userId = store.getters[`${config.vuex.namespace.auths}/userId`];
        return {
            id: null,
            userId,
            name: '',
            link: '',
            image: {
                id: null,
                name: '',
                path: '',
                isDelete: false,
            },
            country: '',
            isDelete: false,
        }
    }
};

export default getters;
