import ImageDto from '@/type/domain/dto/ImageDto';

export default interface BrandDto {
    [key: string]: number | string | boolean | ImageDto;
    id: number;
    name: string;
    link: string;
    image: ImageDto;
    country: string;
    deleteFlag: boolean;
}
