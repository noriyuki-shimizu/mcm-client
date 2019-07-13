import { MutationTree } from 'vuex';
import { BrandDto } from '@/store/brands/types';

const mutations: MutationTree<BrandDto[]> = {
    onBrandDtoStateChanged(state: BrandDto[], brandDto: BrandDto[]) {
        state = brandDto;
    }
};

export default mutations;
