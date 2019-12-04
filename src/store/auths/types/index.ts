export const authNamespace = 'auths'

export interface AuthsState {
    userId: number;
    user: {};
    token: string;
    status: boolean;
}
