import Image from '@/type/image/Image';
import BrandDto from '@/type/dto/BrandDto';
import ShopDto from '@/type/dto/ShopDto';

export default interface ClothesDto {
    id: number;
    image: Image;
    genre: string;
    brand: BrandDto | null;
    shop: ShopDto | null;
    price: number;
    buyDate: string;
    deleteFlag: boolean;
}
