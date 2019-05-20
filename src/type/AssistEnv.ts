import APIRequest from '@/type/domain/mcmApi/APIRequest';

type CallbackType = (response: any) => void;

export default class AssistEnv {

    public static getAssistBrandList(): Promise<any> {
        return new Promise((resolve) => {
            const apiRequest: APIRequest = new APIRequest('GET', '/assist/brand/keyValueList', {});

            apiRequest.execute((response) => {
                resolve(response);
            });
        });
    }

    public static getAssistShopList(): Promise<any> {
        return new Promise((resolve) => {
            const apiRequest: APIRequest = new APIRequest('GET', '/assist/shop/keyValueList', {});

            apiRequest.execute((response) => {
                resolve(response);
            });
        });
    }

}
