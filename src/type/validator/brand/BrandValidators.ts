import Validator from '@/type/validator/Validator';

export default interface BrandValidators {
    [key: string]: Validator;
    name: Validator;
    country: Validator;
}
