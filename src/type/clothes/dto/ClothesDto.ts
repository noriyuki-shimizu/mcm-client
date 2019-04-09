import Image from '@/type/image/Image';
import BrandDto from '@/type/brand/dto/BrandDto';
import ShopDto from '@/type/shop/dto/ShopDto';

export default interface ClothesDto {
    id: number;
    image: Image;
    genre: string;
    brand: BrandDto;
    shop: ShopDto;
    price: number;
    buyDate: string;
    deleteFlag: boolean;
}
