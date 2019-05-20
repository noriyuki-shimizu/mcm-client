import ImageData from '@/type/domain/dto/ImageData';

export default interface ShopDto {
    [key: string]: null | number | string | boolean | ImageData;
    id: number | null;
    name: string;
    link: string;
    stationName: string;
    image: ImageData;
    address: string;
    businessHours: string;
    tel: string;
    deleteFlag: boolean;
}
