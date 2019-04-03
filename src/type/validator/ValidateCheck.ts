import Validator from '@/type/validator/Validator';
import ShopValidators from '@/type/shop/validator/ShopValidators';
import BrandValidators from '@/type/brand/validator/BrandValidators';

export default class ValidateCheck {

    public required(text: string): Validator {
        if (text === undefined || text === '') {
            return {
                validate: true,
                errorMessage: 'Required',
            };
        }

        return {
            validate: false,
            errorMessage: '',
        };
    }

    public lessEqual(text: string, maxCharNum: number): Validator {
        if (text.length > maxCharNum) {
            return {
                validate: true,
                errorMessage: `Exceeds ${maxCharNum} characters`,
            };
        }

        return {
            validate: false,
            errorMessage: '',
        };
    }

    public formatTelephone(telephone: string): Validator {
        if (telephone === undefined || telephone === '') {
            return {
                validate: false,
                errorMessage: '',
            };
        }

        const telephoneNumber: string = telephone.replace(/[━.*‐.*―.*－.*\-.*ー.*\-]/gi, '');

        if (!telephoneNumber.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/)) {
            return {
                validate: true,
                errorMessage: 'Invalid phone number format',
            };
        }

        return {
            validate: false,
            errorMessage: '',
        };
    }

    public hasError(validators: ShopValidators | BrandValidators): boolean {
        const keys: string[] = Object.keys(validators);

        return keys.some((key: string) => {
            return validators[key].validate;
        });
    }
}
