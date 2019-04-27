import ImageDto from '@/type/domain/dto/ImageDto';
import BrandDto from '@/type/domain/dto/BrandDto';
import ShopDto from '@/type/domain/dto/ShopDto';

export default interface ClothesDto {
    id: number;
    image: ImageDto;
    genre: string;
    brand: BrandDto | null;
    shop: ShopDto | null;
    price: number;
    buyDate: string;
    deleteFlag: boolean;
}
