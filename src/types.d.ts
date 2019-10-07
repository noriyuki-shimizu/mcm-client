declare module 'config';

declare interface UsernameValidation {
    [key: string]: boolean;
    required: boolean;
    format: boolean;
}
