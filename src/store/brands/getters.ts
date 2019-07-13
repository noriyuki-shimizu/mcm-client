import { GetterTree } from 'vuex';
import { RootState } from '@/store/types';
import { BrandDto } from '@/store/brands/types';

const getters: GetterTree<BrandDto[], RootState> = {
    get: (state: BrandDto[]) => state,
    findOne: (state: BrandDto[], id: number) =>
        state.find(brandDto => brandDto.id === id)
};

export default getters;
