import Validator from '@/type/Validator';

export default interface ShopValidators {
    [key: string]: Validator;
    name: Validator;
    stationName: Validator;
    address: Validator;
    businessHours: Validator;
    tel: Validator;
}
