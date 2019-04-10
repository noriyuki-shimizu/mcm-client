import Image from '@/type/image/Image';

export default interface BrandDto {
    [key: string]: number | string | boolean | Image;
    id: number;
    name: string;
    link: string;
    image: Image;
    country: string;
    deleteFlag: boolean;
}
