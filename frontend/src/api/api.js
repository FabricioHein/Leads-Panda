import axios from 'axios';
import router from '@/router';
class Api {
    constructor(config, url, token, file) {
        this.url = url;
        this.config = config || {};
        this.token = token || '';
        this.file = file;
    }
    async conectApi() {
      
        const Api = await axios.create({
            headers: { 
                Authorization: `Bearer ${this.token}`
                },
        });
        return Api;
    }
    async conectApiNoToken() {
        return await axios.create({
            headers: { 
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'no-cache',
                'Access-Control-Allow-Headers': 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Content-Type': 'application/json',
                'Accept': '*/*',             

                }
        });
    }
    async Logar() {
        const response = await (
            await this.conectApiNoToken()
        )
            .post(`${this.url}`, this.config)
            .then((response) => {
                console.log(response)
                return {
                    ...response.data,
                    login: true,
                };
            })
            .catch((e) => {
                console.error(e);
                return {
                    ...e.response.data,
                    login: false,
                };
            });

        return response;
    }
    async getUserGoogle() {
        const response = await (
            await this.conectApiNoToken()
        )
            .get(`auth/current_user`, { withCredentials: true })
            .then((response) => {
                var user = response.data;
                console.log(response)
                if (user) {
                    // Exibe as informações do usuário e mostra o botão de logout
                   return user
                }                
                return response;
            })
            .catch((e) => {
                return {
                    ...e.response.data
                };
            });

        if (response.code === 'ERR_BAD_REQUEST' || response.name === 'AxiosError' || response.statusCode === 401) {
            this.RemoveTokenAcesso();
        } else {
            return response;
        }
    }
    async get() {
        const response = await (
            await this.conectApi()
        )
            .get(`${this.url}`, this.config)
            .then((response) => {
                return response;
            })
            .catch((e) => {
                return {
                    ...e.response.data
                };
            });

        if (response.code === 'ERR_BAD_REQUEST' || response.name === 'AxiosError' || response.statusCode === 401) {
            this.RemoveTokenAcesso();
        } else {
            return response;
        }
    }
    async post() {
        const response = await (
            await this.conectApi()
        )
            .post(`${this.url}`, this.config)
            .then((response) => {
                return response;
            })
            .catch((e) => {
                return {
                    ...e.response.data
                };
            });

        if (response.code === 'ERR_BAD_REQUEST' || response.name === 'AxiosError') {
            this.RemoveTokenAcesso();
        } else {
            return response;
        }
    }
    async postFile() {
        const response = await (
            await this.conectApi()
        )
            .post(`${this.url}`, this.file, this.config)
            .then((response) => {
                return response;
            })
            .catch((e) => {
                return {
                    ...e.response.data
                };
            });

        if (response.code === 'ERR_BAD_REQUEST' || response.name === 'AxiosError') {
            this.RemoveTokenAcesso();
        } else {
            return response;
        }
    }
    async delete() {
        const response = await (
            await this.conectApi()
        )
            .delete(`${this.url}`, this.config)
            .then((response) => {
                return response;
            })
            .catch((e) => {
                return {
                    ...e.response.data
                };
            });

        if (response.code === 'ERR_BAD_REQUEST' || response.name === 'AxiosError') {
            this.RemoveTokenAcesso();
        } else {
            return response;
        }
    }
    async update() {
        const response = await (
            await this.conectApi()
        )
            .put(`${this.url}`, this.config)
            .then((response) => {
                return response;
            })
            .catch((e) => {
                return {
                    ...e.response.data
                };
            });

        if (response.code === 'ERR_BAD_REQUEST' || response.name === 'AxiosError') {
            this.RemoveTokenAcesso();
        } else {
            return response;
        }
    }
    RemoveTokenAcesso() {
        localStorage.removeItem('usuario');
        router.push('/')
            
    }
}
export default Api;
