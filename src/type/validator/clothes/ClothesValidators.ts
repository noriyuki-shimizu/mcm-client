import Validator from '@/type/validator/Validator';

export default interface ClothesValidators {
    [key: string]: Validator;
    price: Validator;
}
