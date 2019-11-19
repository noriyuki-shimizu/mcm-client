import { Image } from '../../images/types';

export const brandNamespace = 'brands';

export interface Brand {
    id: number | null;
    userId: number | null;
    name: string;
    link: string;
    image: Image;
    country: string;
    isDelete: boolean;
}

export interface BrandsState {
    brands: Brand[];
}
