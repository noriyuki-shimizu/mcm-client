import Image from '@/type/image/Image';

export default interface ShopDto {
    [key: string]: number | string | boolean | Image;
    id: number;
    name: string;
    link: string;
    stationName: string;
    image: Image;
    address: string;
    businessHours: string;
    tel: string;
    deleteFlag: boolean;
}
