export default interface ShopDto {
    [key: string]: number | string | boolean;
    id: number;
    name: string;
    link: string;
    stationName: string;
    imagePath: string;
    address: string;
    businessHours: string;
    tel: string;
    deleteFlag: boolean;
}
