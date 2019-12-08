import { Image } from '../../images/types';

export const brandNamespace = 'brands';

export interface Brand {
    [key: string]: number | string | Image | boolean | null,
    id: number | null;
    userId: number | null;
    name: string;
    link: string;
    image: Image;
    country: string;
    isDeleted: boolean;
}

export interface BrandsState {
    brands: Brand[];
}
