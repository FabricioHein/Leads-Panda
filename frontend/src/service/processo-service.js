import Api from '@/api/api';

class ProcessoService extends Api {
    constructor(config, token, url) {
        super(config, token, url);
        this.url = url || '/api/processo';
        this.config = config || {};
        this.token = token;
    }
    async atualizarProcesso() {
        return await this.update();
    }
    async deleteProcesso() {
        this.url = '/api/processo/delete';

        return await this.post();
    }
    async criarProcesso() {
        const processo = await this.post()
        if(processo.data) return processo.data
        return [];
    }

    async getAllProcesso() {
        const allUser = await this.get();
        if(allUser.data) return allUser.data;
        return [];
    }
}

export default ProcessoService;
