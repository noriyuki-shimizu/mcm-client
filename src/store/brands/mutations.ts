import { MutationTree } from 'vuex';
import { Brand, BrandsState } from '@/store/brands/types';

const mutations: MutationTree<BrandsState> = {
    onBrandsStateChanged(state: BrandsState, brands: Brand[]) {
        console.log('update brands: ', brands);
        state.brands = brands;
    }
};

export default mutations;
