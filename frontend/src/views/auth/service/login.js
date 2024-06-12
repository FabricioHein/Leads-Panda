import Api from '@/api/api';

class Login extends Api {
    constructor(config, url) {
        super(config, url);        
        this.url = url || 'api/auth/login';
        this.config = config;
    }
    async loginApp() {
        return await this.Logar();
    }
    async loginAppGoogle() {
        this.url = '/auth/current_user';
        return await this.Logar();
    }
}

export default Login;
