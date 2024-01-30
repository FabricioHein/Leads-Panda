import Api from '@/api/api';

class AnotacaoService extends Api {
    constructor(config, token, url) {
        super(config, token, url);
        this.url = url || '/api/task';
        this.config = config || {};
        this.token = token;
    }
 
    async atualizarAnotacao() {
        this.url = '/api/task/atualizarAnotacao';
        return await this.update();
    }
  
    async getAllAnotacao() {
        const getByIdTask = await this.get();
        if(getByIdTask.data){
            return getByIdTask.data
        }
        return [];
    }
   
    async criarAnotacao() {
        this.url = '/api/task/anotacao';
        return await this.post();
    }
    async deleteAnotacao() {
        this.url = '/api/task/delete/deleteAnotacao';
        return await this.post();
    }
}

export default AnotacaoService;
