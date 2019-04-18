import Validator from '@/type/validator/Validator';
import ShopValidators from '@/type/validator/shop/ShopValidators';
import BrandValidators from '@/type/validator/brand/BrandValidators';
import ClothesValidators from '@/type/validator/clothes/ClothesValidators';

export default class ValidateCheck {

    public required(text: string): Validator {
        if (text === undefined || text === '') {
            return {
                validate: true,
                errorMessage: 'Required',
            };
        }

        return this.compiledValidator();
    }

    public lessEqualNumber(num: number, maxNum: number): Validator {
        if (num > maxNum) {
            return {
                validate: true,
                errorMessage: `Less than ${maxNum}`,
            };
        }

        return this.compiledValidator();
    }

    public lessEqualText(text: string, maxCharNum: number): Validator {
        if (text.length > maxCharNum) {
            return {
                validate: true,
                errorMessage: `Exceeds ${maxCharNum} characters`,
            };
        }

        return this.compiledValidator();
    }

    public numberGreaterThanZero(text: string): Validator {
        if (!text.match(/^([1-9]\d*|0)$/)) {
            return {
                validate: true,
                errorMessage: 'Numeric only',
            };
        }

        return this.compiledValidator();
    }

    public formatDate(dateStr: string): Validator {
        if (dateStr === undefined || dateStr === '') {
            return this.compiledValidator();
        }

        if (!dateStr.match(/^\d{4}\/\d{1,2}\/\d{1,2}$/)) {
            return {
                validate: true,
                errorMessage: 'Invalid date format',
            };
        }

        return this.compiledValidator();
    }

    public formatTelephone(telephone: string): Validator {
        if (telephone === undefined || telephone === '') {
            return this.compiledValidator();
        }

        const telephoneNumber: string = telephone.replace(/[━.*‐.*―.*－.*\-.*ー.*\-]/gi, '');

        if (!telephoneNumber.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/)) {
            return {
                validate: true,
                errorMessage: 'Invalid phone number format',
            };
        }

        return this.compiledValidator();
    }

    public hasError(validators: ShopValidators | BrandValidators | ClothesValidators): boolean {
        const keys: string[] = Object.keys(validators);

        return keys.some((key: string) => {
            return validators[key].validate;
        });
    }

    private compiledValidator(): Validator {
        return {
            validate: false,
            errorMessage: '',
        };
    }
}
