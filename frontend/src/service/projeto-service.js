import Api from '@/api/api';

class ProjetoService extends Api {
    constructor(config, token, url) {
        super(config, token, url);
        this.url = url || '/api/projeto';
        this.config = config || {};
        this.token = token;
    }
    async atualizarProjeto() {
        return await this.update();
    }
    async deleteProjeto() {
        this.url = '/api/projeto/delete';

        return await this.post();
    }
    async criarProjeto() {
        return await this.post();
    }

    async getProjetoEtapa() {
        const getProjetoEtapa = await this.get();
        if(getProjetoEtapa.data) return getProjetoEtapa.data;
        return [];
    }

    async getAllProjeto() {
        const projetoUser = await this.get();
        if(projetoUser.data) return projetoUser.data;
        return [];
    }
}

export default ProjetoService;
