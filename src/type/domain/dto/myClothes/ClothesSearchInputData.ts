export default interface ClothesSearchInputData {
    brandId: number | null;
    genreId: number | null;
    shopId: number | null;
    morePrice: number | null;
    lessPrice: number | null;
    buyDate: Date | null;
    deleteFlag: boolean;
}
