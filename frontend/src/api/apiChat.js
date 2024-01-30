import axios from 'axios';

class ApiChat {
    constructor(config, url, token) {
        this.baseURL = 'http://localhost:50001';
        this.url = url;
        this.config = config || {};
        this.token = token || '';
    }
    async conectApi() {
        const Api = await axios.create({
            baseURL: this.baseURL,
            headers: { Authorization: `Bearer ${this.token}` },
        });
        return Api;
    }
    async conectApiNoToken() {
        return await axios.create({
            baseURL: this.baseURL,
        });
    }
    async Logar() {
        const response = await (
            await this.conectApiNoToken()
        )
            .post(`${this.baseURL}${this.url}`, this.config)
            .then((response) => {
                return {
                    usuario: response,
                    login: true,
                };
            })
            .catch((e) => {
                console.error(e);
                return {
                    login: false,
                };
            });

        return response;
    }
    async get() {

        const response = await (
            await this.conectApi()
        )
            .get(`${this.baseURL}${this.url}`, this.config)
            .then((response) => {
                return response;
            })
            .catch((e) => {
                return e;
            });

        return response;
    }
    async post() {
        const response = await (
            await this.conectApi()
        )
            .post(`${this.baseURL}${this.url}`, this.config)
            .then((response) => {
                return response;
            })
            .catch((e) => {
                return e;
            });

        return response;
    }
    async delete() {
        const response = await (
            await this.conectApi()
        )
            .delete(`${this.baseURL}${this.url}`, this.config)
            .then((response) => {
                return response;
            })
            .catch((e) => {
                return e;
            });

        return response;
    }
    async update() {
        const response = await (
            await this.conectApi()
        )
            .put(`${this.baseURL}${this.url}`, this.config)
            .then((response) => {
                return response;
            })
            .catch((e) => {
                return e;
            });

        return response;
    }
}
export default ApiChat;
