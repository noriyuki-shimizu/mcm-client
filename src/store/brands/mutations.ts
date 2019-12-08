import { MutationTree } from 'vuex';
import { Brand, BrandsState } from '@/store/brands/types';

const mutations: MutationTree<BrandsState> = {
    onBrandsStateChanged(state: BrandsState, brands: Brand[]) {
        state.brands = brands;
    },
    updateBrand(state: BrandsState, updateBrand: Brand) {
        state.brands = state.brands.map(brand =>
            updateBrand.id === brand.id ? updateBrand : brand
        );
    },
    addCreateBrand(state: BrandsState, createBrand: Brand) {
        state.brands.push(createBrand);
    }
};

export default mutations;
