import Api from '@/api/api';

class ClienteService extends Api {
    constructor(config, token, url) {
        super(config, token, url);

        this.url = url || '/api/clientes';
        this.config = config || {};
        this.token = token;
    }
    async atualizarCliente() {
        return await this.update();
    }
    async deleteCliente() {
        this.url = '/api/clientes/delete';

        return await this.post();
    }
    async criarCliente() {
        const data = await this.post()
        return data.data;
    }
    async criarHistoricoCliente() {
        this.url = '/api/clientes/historico';

        return await this.post();
    }

    async getAllClientes() {
        const allClientes = await this.get();
        if(allClientes.data){
            return allClientes.data
        }
        return [];
    }
}

export default ClienteService;
