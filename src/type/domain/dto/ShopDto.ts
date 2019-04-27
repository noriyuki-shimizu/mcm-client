import ImageDto from '@/type/domain/dto/ImageDto';

export default interface ShopDto {
    [key: string]: number | string | boolean | ImageDto;
    id: number;
    name: string;
    link: string;
    stationName: string;
    image: ImageDto;
    address: string;
    businessHours: string;
    tel: string;
    deleteFlag: boolean;
}
