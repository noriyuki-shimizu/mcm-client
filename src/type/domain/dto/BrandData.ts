import ImageData from '@/type/domain/dto/ImageData';

export default interface BrandDto {
    [key: string]: null | number | string | boolean | ImageData;
    id: number | null;
    name: string;
    link: string;
    image: ImageData;
    country: string;
    deleteFlag: boolean;
}
