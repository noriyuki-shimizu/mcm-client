import axios from 'axios';
import config from 'config';

type CallbackType = (response: any) => void;

export default class Request {
    private url: string;
    private params: any;
    private method: string;

    constructor(url: string, params: any, method: string = 'GET') {
        this.url = url;
        this.params = params;
        this.method = method;
    }

    public get(callback: CallbackType): void {
        axios({
            method: this.method,
            baseURL: config.server.protocolHost,
            url: this.url,
            params: this.params,
        }).then((response) => {
            callback(response);
        });
    }

}
