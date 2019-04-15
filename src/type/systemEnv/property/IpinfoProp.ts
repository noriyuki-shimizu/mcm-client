import Env from '@/type/systemEnv/Env';

export default class IpinfoProp extends Env {
    private readonly url: string = super.load('ipinfo.request.url');
    private readonly apiToken: string = super.load('ipinfo.request.get.token');
}
