import Api from '@/api/api';

class ContatosService extends Api {
    constructor(config, token, url) {
        super(config, token, url);
       
        this.url = url || '/api/contatos';
        this.config = config || {};
        this.token = token;
    }
    async atualizarContatos() {
        return await this.update();
    }
    async deleteContatos() {
        this.url = '/api/contatos/delete';

        return await this.post();
    }
    async criarContatos() {
        return await this.post();
    }
 
    async getAllContatos() {
         const allContatos= await this.get();
   
         if(allContatos.data) return allContatos.data
        return [];
    }
    async getByIdContatosChat() {
        const getByIdContatosChat = await this.get();
        if (getByIdContatosChat.data) return getByIdContatosChat.data
        return [];
    }
    async getByIdNomeOrNumber() {
        const getByIdNomeOrNumber = await this.get();
        if(getByIdNomeOrNumber.data) return getByIdNomeOrNumber.data
        return [];
    }
}

export default ContatosService;
