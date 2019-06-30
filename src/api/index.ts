import axios, { AxiosResponse } from 'axios';
import store from '@/store';
import config from 'config';

const http = axios.create({
    baseURL: config.server.protocolHost,
});
http.interceptors.request.use((requestConfig) => {
    const token: string = store.getters[`${config.vuex.namespace.auths}/token`];
    if (token) {
        requestConfig.headers.Authorization = `Bearer ${token}`;
        return requestConfig;
    }
    return requestConfig;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default async (option: any) => {
    return await http(option)
        .then((response: AxiosResponse) => [null, response])
        .catch((error: any) => [error, null]);
};
