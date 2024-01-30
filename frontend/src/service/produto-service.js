import Api from '@/api/api';

class ProdutoService extends Api {
    constructor(config, token, url) {
        super(config, token, url);

        this.url = url || '/api/produto';
        this.config = config || {};
        this.token = token;
    }
    async imageProduto() {
        this.url = '/api/produto/imageProduto';

        return await this.post();
    }
    async atualizarProduto() {
        return await this.update();
    }
    async deleteProduto() {
        this.url = '/api/produto/delete';

        return await this.post();
    }
    async criarProduto() {
        return await this.post();
    }

    async getAllProdutos() {
        const allProdutos = await this.get();
        if (allProdutos.data) return allProdutos.data
        return [];
    }
}

export default ProdutoService;
