import ImageData from '@/type/domain/dto/ImageData';
import GenreData from '@/type/domain/dto/GenreData';
import BrandData from '@/type/domain/dto/BrandData';
import ShopData from '@/type/domain/dto/ShopData';

export default interface ClothesInputData {
    id: number | null;
    image: ImageData;
    genre: GenreData;
    brand: BrandData;
    shop: ShopData;
    price: number;
    buyDate: Date | null;
    deleteFlag: boolean;
}
