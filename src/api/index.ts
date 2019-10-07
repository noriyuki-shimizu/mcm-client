import axios, { AxiosResponse } from 'axios';
import config from 'config';
import store from '@/store';

const http = axios.create({
    baseURL: config.server.protocolHost
});
http.interceptors.request.use(
    requestConfig => {
        const token: string =
            store.getters[`${config.vuex.namespace.auths}/token`];
        if (token) {
            requestConfig.headers.Authorization = `Bearer ${token}`;
            return requestConfig;
        }
        return requestConfig;
    },
    error => {
        return Promise.reject(error);
    }
);

export default async (option: any) => {
    return await http(option)
        .then((response: AxiosResponse) => [null, response])
        .catch((error: any) => [error, null]);
};
