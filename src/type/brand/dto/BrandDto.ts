export default interface BrandDto {
    [key: string]: number | string | boolean;
    id: number;
    name: string;
    link: string;
    imagePath: string;
    country: string;
    deleteFlag: boolean;
}
