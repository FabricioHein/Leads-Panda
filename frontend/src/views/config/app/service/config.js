import Api from '@/api/api';

class Config extends Api {
    constructor(config, token, url) {
        super(config, token, url);        
        this.url = url || '/api/config';
        this.config = config;
        this.token = token
    }
    async AtualizarConfig() {
        return await this.update();
    }
}

export default Config;
