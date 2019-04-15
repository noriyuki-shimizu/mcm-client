import Env from '@/type/systemEnv/Env';

export default class ServerProp extends Env {
    private readonly local: string = super.load('server.app.url.local');
}
