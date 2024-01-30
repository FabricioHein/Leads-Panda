import Api from '@/api/api';

class MotivosService extends Api {
    constructor(config, token, url) {
        super(config, token, url);
       
        this.url = url ;
        this.config = config || {};
        this.token = token;
    }
  
    async atualizarMotivos() {
        this.url = '/api/task/atualizaMotivos';

        return await this.update();
    }
    async deleteMotivos() {
        this.url = '/api/task/delete/motivos';

        return await this.post();
    }
    async criarMotivos() {
        this.url = '/api/task/createMotivos';

        return await this.post();
    }
 
    async getAllMotivos() {
         const allMotivoss = await this.get();
         if(allMotivoss.data) return allMotivoss.data;
        return [];
    }
}

export default MotivosService;
