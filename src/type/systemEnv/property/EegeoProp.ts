import Env from '@/type/systemEnv/Env';

export default class EegeoProp extends Env {
    public readonly apiKey = super.load('eegeo.app.api.key');

    constructor() {
            super();
            this.apiKey = super.load('eegeo.app.api.key');
    }
}
