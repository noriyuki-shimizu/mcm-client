import axios from 'axios';
import config from 'config';

type CallbackType = (response: any) => void;

export default class APIRequest {
    private url: string;
    private params: any;
    private method: string;

    constructor(method: string, url: string, params: any) {
        this.url = url;
        this.params = params;
        this.method = method;
    }

    public execute(callback: CallbackType): void {
        axios({
            method: this.method,
            baseURL: config.server.protocolHost,
            url: this.url,
            params: this.params,
        }).then((response) => {
            callback(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }

}
