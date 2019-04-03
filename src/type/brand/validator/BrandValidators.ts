import BrandValidator from '@/type/Validator';

export default interface BrandValidators {
    [key: string]: BrandValidator;
    name: BrandValidator;
    stationName: BrandValidator;
    address: BrandValidator;
    businessHours: BrandValidator;
    tel: BrandValidator;
}
