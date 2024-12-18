import Api from '@/api/api';

class UsuarioService extends Api {
    constructor(config, token, url) {
        super(config, token, url);
        this.url = url || '/api/usuario';
        this.config = config || {};
        this.token = token;
    }
    async AtualizarUsuario() {
        const data = await this.update()
        return data.data;
    }
    async deleteUsuario() {
        this.url = '/api/usuario/delete';

        return await this.post();
    }
    async criarUsuario() {
        return await this.post();
    }
    async novoCliente() {
        this.url = '/api/authenticator/criar-usuario-cliente';

        const novoCliente = await this.post()
      
        return novoCliente.data;
    }
    async recupearSenhaEmail(email) {
        this.url = `/api/authenticator/novasenha/${email}`;
        let recupearSenhaEmail = await this.get();

        return recupearSenhaEmail.data;
    }
    async verificaEmail(uuid) {
   
        let verificaEmail = await this.get();
        return verificaEmail.data;
    }
    async atualizarPermissaoModulos() {
        this.url = '/api/usuario/atualizar/permissao';
        return await this.post();
    }
    async getAllUsuarios() {
        const allUser = await this.get();
        if(allUser.data) return allUser.data;
        return [];
    }
}

export default UsuarioService;
