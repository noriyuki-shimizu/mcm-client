import { MutationTree } from 'vuex';
import { Brand } from '@/store/brands/types';

const mutations: MutationTree<Brand[]> = {
    onBrandsStateChanged(state: Brand[], brands: Brand[]) {
        console.log('state: %o, brands: %o', state, brands);
        state = brands;
    }
};

export default mutations;
