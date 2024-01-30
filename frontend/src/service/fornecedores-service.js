import Api from '@/api/api';

class FornecedorService extends Api {
    constructor(config, token, url) {
        super(config, token, url);
        this.url = url || '/api/fornecedor';
        this.config = config || {};
        this.token = token;
    }
    async atualizarFornecedor() {
        return await this.update();
    }
    async deleteFornecedor() {
        this.url = '/api/fornecedor/delete';

        return await this.post();
    }
    async criarFornecedor() {
        return await this.post();
    }
 
    async getAllFornecedor() {
        const allUser = await this.get();
        if(allUser.data) return allUser.data;
        return [];
    }
}

export default FornecedorService;
