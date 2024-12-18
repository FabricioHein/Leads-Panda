import Api from '@/api/api';

class DashService extends Api {
    constructor(config, token, url) {
        super(config, token, url);
        this.url = url || '/api/config/dashboard';
        this.config = config || {};
        this.token = token;
    }

    async getAllDashs() {
        const allDashs = await this.get();
        if(allDashs.data){
            return allDashs.data
        }
        return [];
    }
}

export default DashService;
