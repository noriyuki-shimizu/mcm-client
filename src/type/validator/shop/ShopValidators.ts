import Validator from '@/type/validator/Validator';

export default interface ShopValidators {
    [key: string]: Validator;
    name: Validator;
    stationName: Validator;
    address: Validator;
    businessHours: Validator;
    tel: Validator;
}
